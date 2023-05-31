import { UseFormRegisterReturn } from 'react-hook-form';

export interface InputProps {
  identity: string;
  label: string;
  placehd?: string;
  message?: string;
  autoselected?: boolean;

  context?: UseFormRegisterReturn;
  useButton?: boolean;
  isButtonContent?: string;
}
