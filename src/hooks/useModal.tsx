import React, { ReactElement, createContext, useCallback, useContext, useState } from 'react';

import { OpenModal, CloseModal } from '../types/modal';
import Dialog, { DialogProps } from '../components/modals/Generic';

interface IModalContext {
  openDialog: OpenModal<DialogProps>;
  closeDialog: CloseModal;
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

const useDefaultModalLogic = <T extends unknown>() => {
  const [visible, setVisible] = useState(false);
  const [props, setProps] = useState<T | undefined>();

  const openModal = useCallback((props?: T) => {
    setProps(props);
    setVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setProps(undefined);
    setVisible(false);
  }, []);

  return {
    visible,
    props,
    openModal,
    closeModal,
  };
};

export const useModal = () => {
  const {openDialog, closeDialog} = useContext(ModalContext);
  return {open: openDialog, close: closeDialog};
};

export const ModalContextProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const {
    openModal: openDialog,
    closeModal: closeDialog,
    props: dialogProps,
    visible: dialogVisible,
  } = useDefaultModalLogic<DialogProps>();

  const modalContextValue: IModalContext = {
    openDialog,
    closeDialog,
  };

  return (
    <ModalContext.Provider value={modalContextValue}>
      {dialogProps && (
        <Dialog {...dialogProps} onClose={closeDialog} visible={dialogVisible} />
      )}
      {children}
    </ModalContext.Provider>
  );
};
