import { Dispatch, SetStateAction } from 'react';

export interface ModalProps {
  id: string;
  content: string;
  title: string;
  writer: string;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}
