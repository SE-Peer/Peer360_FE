import Button from '@/Components/Button';

import { HiddenInputProps } from './types';

/**
 * @param message 상태 메세지 입력
 * @param label Input 라벨 입력
 * @param placehd Input Placeholder 입력
 * @param context react-hook-form 설정 추가
 */
const HiddenInput = (props: HiddenInputProps) => {
  const {
    context,
    identity,
    label = '입력',
    message = '',
    placehd = `${label}을 입력해주세요`,
    autoselected = false,
    useButton = false,
    isButtonContent = '확인',
  } = props;

  const ButtonStyle = `px-4 py-3 text-[15px] border-2 border-[#aaaaaa] rounded w-full display-none`;

  return (
    <>
      <label className="text-[1.1rem]" htmlFor={identity}>
        {label}
      </label>
      <div className="flex w-full justify-between gap-2 ">
        <input
          className={ButtonStyle}
          id={identity}
          type="password"
          placeholder={placehd}
          autoFocus={autoselected}
          {...context}
          {...props}
        />
        {useButton && <Button color="mainColor" content={isButtonContent} />}
      </div>
      <p className="text-red text-[0.875rem] py-1">{message}</p>
    </>
  );
};

export default HiddenInput;
