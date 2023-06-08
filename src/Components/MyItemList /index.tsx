import { useEffect, useState } from 'react';
import axios from 'axios';

import SmallButton from '@/Components/SmallButton';
import Button from '@/Components/Button';
import ReviewModal from '@/Components/ReviewModal';

export default function MyItemList() {
  const [MyItemListObj, setMyItemListObj] = useState<any>();
  const [isSelected, setIsSelected] = useState<string>('');
  // const [ProjectList, setProjectList] = useState<any>();
  useEffect(() => {
    axios
      .get('http://ec2-43-200-174-159.ap-northeast-2.compute.amazonaws.com:8081/projects/list')
      .then(() => {});
    axios
      .get(
        `http://ec2-43-200-174-159.ap-northeast-2.compute.amazonaws.com:8081/projects/participated/${localStorage.getItem(
          'userId',
        )}`,
      )
      .then((res) => {
        const sortedData = res.data.map((item: any, idx: any) => ({ ...item, id: idx }));

        setMyItemListObj(sortedData);
      });
  }, [MyItemListObj]);

  return (
    <>
      {MyItemListObj &&
        [...MyItemListObj].reverse().map((item: any, idx: any) => (
          <div className="flex gap-10 max-w-screen-xl " key={idx}>
            {isSelected === item.id && <ReviewModal projectName={item.name} />}
            <div className="flex flex-col  gap-1 align-text-bottom  w-[320px] h-[380px] border border-t-0 border-l-0 border-r-0 rounded-xl border-gray  relative overflow-hidden">
              <img className="  left-0 top-0 h-3/5 " src="src/assets/gitImage.jpeg" />
              <div className="pt-3 mx-2 left-0 top-0 w-1/3 ">
                <SmallButton
                  content={item.status === 'REVIEW_POSSIBLE' ? '리뷰가능' : '리뷰완료'}
                  color={item.status === 'REVIEW_POSSIBLE' ? 'mainColor' : 'gray'}
                />
              </div>
              <div
                // onClick={closeReviewModal}
                className="flex flex-col text-justify px-3 font-semibold text-[24px] "
              >
                {item.name}
                <div className="flex text-justify text-[10px] divide">
                  프로젝트URL: <a href={item.url}>{item.url}</a>
                </div>
                <div className="flex text-justify text-[10px] divide">
                  프로젝트리더: {item.creatorEmail}
                </div>
                <div
                  onClick={() => {
                    setIsSelected(item.id);
                  }}
                >
                  <Button
                    content={item.status === 'REVIEW_POSSIBLE' ? '리뷰가능' : '리뷰완료'}
                    color={item.status === 'REVIEW_POSSIBLE' ? 'mainColor' : 'gray'}
                    disabled={item.status !== 'REVIEW_POSSIBLE'}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
