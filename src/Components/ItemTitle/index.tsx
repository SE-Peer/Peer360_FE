import { ReactComponent as Arrow } from '@/assets/arrow.svg';

import { ItemTitleProps } from './types';

export default function ItemTitle(props: ItemTitleProps) {
  const { itemMainTitle = '수원시', itemSubTitle = '의 매물', itemToggle = true } = props;
  return (
    <>
      <div className="flex pt-10">
        <div className="text-[25px]  font-semibold">{itemMainTitle}</div>
        <div className="flex px-3 py-[15px] text-[12px] gap-1 align-bottom ">
          {itemSubTitle}
          {itemToggle ? <Arrow /> : ' '}
        </div>
      </div>
    </>
  );
}
