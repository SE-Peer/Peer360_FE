import { BlackItemTitleProps } from './types';

export default function BlackItemTitle(props: BlackItemTitleProps) {
  const { itemMainTitle = '수원시', itemSubTitle = '의 매물' } = props;
  return (
    <>
      <div className="flex pt-10">
        <div className="text-[32px] flex-col text-white  font-semibold">
          {itemMainTitle}
          <div className="flex  pt-[3px] pb-[9px] text-[12px] text-[#B9B9B9] gap-1 align-bottom ">
            <div className="flex">{itemSubTitle}</div>
          </div>
        </div>
      </div>
    </>
  );
}
