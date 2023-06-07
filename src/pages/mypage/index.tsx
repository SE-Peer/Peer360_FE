import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '@/Components/Header';
import ItemTitle from '@/Components/ItemTitle';

export const MyPage = () => {
  const navigate = useNavigate();
  const [cloudUrl, setCloudUrl] = useState<string>('');
  const [isUrl, setIsUrl] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(
        `http://ec2-43-200-3-215.ap-northeast-2.compute.amazonaws.com:8081/users/${localStorage.getItem(
          'userId',
        )}/reviews/wordcloud`,
      )
      .then((res) => {
        setCloudUrl(res.data);
        setIsUrl(true);
      });
  }, []);
  return (
    <>
      <Header />
      <div
        className=" flex flex-col cursor-pointer font-bold text-[42px] text-green"
        onClick={() => {
          navigate('/mainPage');
        }}
      ></div>
      {/* <div className="flex">
        <StarRating />
      </div> */}
      <div>
        <div className="flex h-[540px] border rounded-xl border-gray divide-x divide-gray">
          <div className="w-2/5 px-5 py-2 flex-col">
            <ItemTitle
              itemMainTitle="나의 리뷰"
              itemSubTitle="나의 리뷰를 워드 클라우드로 확인해요."
              itemToggle={true}
            />
            <div className="flex   w-[400px] h-[400px] place-items-center ">
              <div className=" w-full h-full ">
                {isUrl && <img className="px-42 " src={cloudUrl} />}
              </div>
            </div>
          </div>
          <div className="w-1/2 px-3 ">
            <ItemTitle itemMainTitle="내 프로필" itemSubTitle="나의 프로필" itemToggle={true} />

            <div className="text-center py-36 px-[200px] font-bold text-gray text-[30px]">
              준비 중입니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
