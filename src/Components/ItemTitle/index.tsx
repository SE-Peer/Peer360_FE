import { ReactComponent as Arrow } from '@/assets/arrow.svg';

import { ItemTitleProps } from './types';

export default function ItemTitle(props: ItemTitleProps) {
  const { itemMainTitle = '수원시', itemSubTitle = '의 매물', itemToggle = true } = props;
  return (
    <>
      <div className="flex pt-10">
        <div className="text-[25px]  font-semibold">{itemMainTitle}</div>
        <div className="flex px-3 pt-[8px] pb-[9px] text-[12px] gap-1 align-bottom ">
          <div className="flex">
            {itemSubTitle}
            {itemToggle ? <Arrow /> : ' '}
          </div>
        </div>
      </div>
    </>
  );
}
