import SmallButton from '@/Components/SmallButton';

import { ItemListProps } from './types';

export default function ItemList(props: ItemListProps) {
  const { itemPrice = '500', itemName = '원씽 The One Thing', itemState = '대여가능' } = props;

  return (
    <>
      <div className="flex gap-10 max-w-screen-lg">
        <div className="flex flex-col gap-1 align-text-bottom  w-[200px] h-[280px] border rounded-xl border-gray border-t-0  border-l-0  border-r-0 relative overflow-hidden">
          <img className="  left-0 top-0 h-3/5 " src="src/assets/oneTHing.png" />
          <div className="pt-3 mx-2 left-0 top-0 w-1/3 ">
            <SmallButton content={itemState} />
          </div>
          <div className="mx-2 font-semibold font-[18px] ">{itemName}</div>
          <div className="mx-2 font-semibold font-[16px] ">{itemPrice}원</div>
        </div>
        <div className="flex flex-col gap-1 align-text-bottom  w-[200px] h-[280px] border rounded-xl border-gray border-t-0  border-l-0  border-r-0 relative overflow-hidden">
          <img className="  left-0 top-0 h-3/5 " src="src/assets/oneTHing.png" />
          <div className="pt-3 mx-2 left-0 top-0 w-1/3 ">
            <SmallButton content={itemState} />
          </div>
          <div className="mx-2 font-semibold font-[18px] ">{itemName}</div>
          <div className="mx-2 font-semibold font-[16px] ">{itemPrice}원</div>
        </div>
        <div className="flex flex-col gap-1 align-text-bottom  w-[200px] h-[280px] border rounded-xl border-gray border-t-0  border-l-0  border-r-0 relative overflow-hidden">
          <img className="  left-0 top-0 h-3/5 " src="src/assets/oneTHing.png" />
          <div className="pt-3 mx-2 left-0 top-0 w-1/3 ">
            <SmallButton content={itemState} />
          </div>
          <div className="mx-2 font-semibold font-[18px] ">{itemName}</div>
          <div className="mx-2 font-semibold font-[16px] ">{itemPrice}원</div>
        </div>
        <div className="flex flex-col gap-1 align-text-bottom  w-[200px] h-[280px] border rounded-xl border-gray border-t-0  border-l-0  border-r-0 relative overflow-hidden">
          <img className="  left-0 top-0 h-3/5 " src="src/assets/oneTHing.png" />
          <div className="pt-3 mx-2 left-0 top-0 w-1/3 ">
            <SmallButton content={itemState} />
          </div>
          <div className="mx-2 font-semibold font-[18px] ">{itemName}</div>
          <div className="mx-2 font-semibold font-[16px] ">{itemPrice}원</div>
        </div>
      </div>
    </>
  );
}
