import { useNavigate } from 'react-router-dom';

import SmallButton from '@/Components/SmallButton';
import Button from '@/Components/Button';

import { ItemListProps } from './types';

export default function ItemList(props: ItemListProps) {
  const {
    itemName = 'Web Project',
    itemState = '리뷰가능',
    itemUrl = 'https://github.com/turfguy',
  } = props;
  const navigate = useNavigate();
  return (
    <>
      <div className="flex gap-10 max-w-screen-xl ">
        <div className="flex flex-col  gap-1 align-text-bottom  w-[320px] h-[380px] border border-t-0 border-l-0 border-r-0 rounded-xl border-gray  relative overflow-hidden">
          <img className="  left-0 top-0 h-3/5 " src="src/assets/oneTHing.png" />
          <div className="pt-3 mx-2 left-0 top-0 w-1/3 ">
            <SmallButton content={itemState} />
          </div>
          <div className="flex flex-col text-justify px-3 font-semibold text-[24px] ">
            {itemName}
            <div className="flex text-justify text-[10px] divide">
              프로젝트URL: <a href={itemUrl}>{itemUrl}</a>
            </div>
            <div
              onClick={() => {
                navigate('/addReview');
              }}
            >
              <Button color="mainColor" content="리뷰 작성" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
