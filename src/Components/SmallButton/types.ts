export type colorKindsOf = 'mainColor' | 'brown2' | 'brown3' | 'red' | 'green' | 'gray';

export interface SmallButtonProps {
  content: string;
  color?: colorKindsOf;
  isSubmit?: boolean;
  isSecondary?: boolean;
  disabled?: boolean;
}
