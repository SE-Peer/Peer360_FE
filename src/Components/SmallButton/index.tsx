import { useReducer, useEffect } from 'react';

import { SmallButtonProps } from './types';
import smallButtonReducer from './smallButtonReducer';

export default function SmallButton(props: SmallButtonProps) {
  const {
    disabled = false,
    content = 'Button',
    isSecondary = false,
    isSubmit = false,
    color = 'brown2',
  } = props;
  const [colorHeirarchy, dispatchHeirarchy] = useReducer(smallButtonReducer, '');

  useEffect(() => {
    dispatchHeirarchy({ isSecondary, type: color });
  }, []);

  const ButtonStyle = `  h-[25px] px-2 text-[12px] text-justify rounded-ml border-2 whitespace-nowrap hover:cursor-pointer ${colorHeirarchy}`;
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
