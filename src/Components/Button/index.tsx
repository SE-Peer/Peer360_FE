import { useReducer, useEffect } from 'react';

import { ButtonProps } from './types';
import ButtonReducer from './buttonReducer';

export default function Button(props: ButtonProps) {
  const {
    disabled = false,
    content = 'Button',
    isSecondary = false,
    isSubmit = false,
    color = 'brown1',
  } = props;
  const [colorHeirarchy, dispatchHeirarchy] = useReducer(ButtonReducer, '');

  useEffect(() => {
    dispatchHeirarchy({ isSecondary, type: color });
  }, []);

  const ButtonStyle = `py-2 h-[52px] px-5 text-[15px] rounded-xl border-2 whitespace-nowrap hover:cursor-pointer ${colorHeirarchy}`;
  return (
    <>
      {!isSubmit && (
        <button disabled={disabled} type="button" className={ButtonStyle}>
          {content}
        </button>
      )}
      {isSubmit && (
        <button disabled={disabled} type="submit" className={ButtonStyle}>
          {content}
        </button>
      )}
    </>
  );
}
