import Modal from '@mui/material/Modal';
import { IModal } from '../../../types/modal';
import { ReactNode } from 'react';

export interface DialogProps extends IModal {
  onOk?: VoidFunction;
  component?: ReactNode;
}

const Dialog = ({
  component,
  visible = false,
  onClose,
  onOk,
}: DialogProps) => {
  const handleOk = () => {
    onOk?.();
    onClose?.();
  };
  return (
    <Modal open={visible} onClose={onClose}>
      <>
      {component}
      </>
    </Modal>
  );
};

export default Dialog;
