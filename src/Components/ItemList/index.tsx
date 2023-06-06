import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import SmallButton from '@/Components/SmallButton';
import Button from '@/Components/Button';

// interface mapItemListobj {
//   name: string;
//   url: string;
//   status: string;
//   creatorEmail: string;
// }
export default function ItemList() {
  const [ItemListObj, setItemListObj] = useState<any>();
  useEffect(() => {
    axios
      .get('http://ec2-43-200-3-215.ap-northeast-2.compute.amazonaws.com:8081/projects/list')
      .then((res) => {
        // console.log(res);
        setItemListObj(res.data);
      });
  });
  // const {
  //   itemName = 'Web Project',
  //   itemState = '리뷰가능',
  //   itemUrl = 'https://github.com/turfguy',
  // } = props;
  // const ItemListObj: mapItemListobj[] = [..];
  const navigate = useNavigate();
  return (
    <>
      {ItemListObj &&
        ItemListObj.map((item: any, idx: any) => (
          <div className="flex gap-10 max-w-screen-xl " key={idx}>
            <div className="flex flex-col  gap-1 align-text-bottom  w-[320px] h-[380px] border border-t-0 border-l-0 border-r-0 rounded-xl border-gray  relative overflow-hidden">
              <img className="  left-0 top-0 h-3/5 " src="src/assets/gitImage.jpeg" />
              <div className="pt-3 mx-2 left-0 top-0 w-1/3 ">
                <SmallButton
                  content={item.status === 'REVIEW_POSSIBLE' ? '리뷰가능' : '리뷰불가능'}
                  color={item.status === 'REVIEW_POSSIBLE' ? 'mainColor' : 'red'}
                />
              </div>
              <div className="flex flex-col text-justify px-3 font-semibold text-[24px] ">
                {item.name}
                <div className="flex text-justify text-[10px] divide">
                  프로젝트URL: <a href={`https://www.${item.url}`}>{item.url}</a>
                </div>
                <div className="flex text-justify text-[10px] divide">
                  프로젝트리더: {item.creatorEmail}
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
        ))}
    </>
  );
}
