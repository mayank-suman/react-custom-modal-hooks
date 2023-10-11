import Modal from '@mui/material/Modal';
import { IModal } from '../../../types/modal';
import { ReactNode } from 'react';

export interface AlertProps extends IModal {
  onOk?: VoidFunction;
  component?: ReactNode;
}



const Alert = ({
  component,
  visible = false,
  onClose,
  onOk,
}: AlertProps) => {
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

export default Alert;
