import { colorKindsOf } from './types';

export default function ButtonReducer(
  state: string,
  action: { type: colorKindsOf; isSecondary: boolean },
) {
  switch (action.type) {
    case 'brown1':
      if (action.isSecondary) return 'border-brown1 text-brown1 bg-white';
      return 'border-brown1 text-white bg-brown1';
    case 'brown2':
      if (action.isSecondary) return 'border-brown2 text-brown2 bg-white';
      return 'border-brown2 text-white bg-brown2';
    case 'brown3':
      if (action.isSecondary) return 'border-brown3 text-brown3 bg-white';
      return 'border-brown3 text-white bg-brown3';
    case 'red':
      if (action.isSecondary) return 'border-red text-red bg-white';
      return 'border-red text-white bg-red';
    case 'green':
      if (action.isSecondary) return 'border-green text-green bg-white';
      return 'border-green text-white bg-green';
    case 'gray':
      if (action.isSecondary) return 'border-gray text-gray bg-white';
      return 'border-gray text-white bg-gray';
    default:
      return '';
  }
}
