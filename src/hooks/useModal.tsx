import React, { ReactElement, createContext, useCallback, useContext, useState } from 'react';

import { OpenModal, CloseModal } from '../types/modal';
import Alert, { AlertProps } from '../components/modals/Generic';

interface IModalContext {
  openAlert: OpenModal<AlertProps>;
  closeAlert: CloseModal;
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
  const {openAlert, closeAlert} = useContext(ModalContext);
  return {openAlert, closeAlert};
};

export const ModalContextProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const {
    openModal: openAlert,
    closeModal: closeAlert,
    props: alertProps,
    visible: alertVisible,
  } = useDefaultModalLogic<AlertProps>();

  const modalContextValue: IModalContext = {
    openAlert,
    closeAlert,
  };

  return (
    <ModalContext.Provider value={modalContextValue}>
      {alertProps && (
        <Alert {...alertProps} onClose={closeAlert} visible={alertVisible} />
      )}
      {children}
    </ModalContext.Provider>
  );
};
