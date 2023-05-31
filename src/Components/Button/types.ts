export type colorKindsOf = 'brown1' | 'brown2' | 'brown3' | 'red' | 'green' | 'gray';

export interface ButtonProps {
  content: string;
  color?: colorKindsOf;
  isSubmit?: boolean;
  isSecondary?: boolean;
  disabled?: boolean;
}
