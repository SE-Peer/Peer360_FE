import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import BlackItemTitle from '@/Components/BlackItemTitle';
import Header from '@/Components/Header';
import ItemTitle from '@/Components/ItemTitle';
import ScoreBoard from '@/Components/ScoreBoard';
import Button from '@/Components/Button';

export const MyPage = () => {
  const navigate = useNavigate();
  const [cloudUrl, setCloudUrl] = useState<string>('');
  const [myInfo, setMyInfo] = useState<any>(null);
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
  }, [isUrl]);

  useEffect(() => {
    axios
      .get(
        `http://ec2-43-200-3-215.ap-northeast-2.compute.amazonaws.com:8081/users/${localStorage.getItem(
          'userId',
        )}`,
      )
      .then((res) => {
        const { password, ...infoWithoutPassword } = res.data;
        setMyInfo(infoWithoutPassword);
      });
  }, []);

  return (
    <>
      <Header />
      <div
        className="flex flex-col cursor-pointer font-bold text-[42px] text-green"
        onClick={() => {
          navigate('/mainPage');
        }}
      ></div>

      <div className="flex ">
        <div className="w-2/5 flex-col border border-gray rounded px-3  border-r-0 bg-black">
          <BlackItemTitle
            itemMainTitle={`${myInfo?.name}님의 키워드`}
            itemSubTitle="나의 평가를 워드클라우드로 확인해요."
          />
          <div className=" ">
            {isUrl && <img className="py-2 w-[500px] h-[400px]" src={cloudUrl} alt="Word Cloud" />}
          </div>
        </div>
        <div className="w-3/5 border border-gray rounded border-l-0 ">
          <div className="px-3">
            <ItemTitle itemMainTitle={`프로필`} itemSubTitle="" itemToggle={true} />
          </div>
          {myInfo && (
            <dl className="w-full divide-y divide-gray px-3 ">
              {Object.entries(myInfo).map(([key, value]: [string, any]) => (
                <div className="flex flex-col pb-3" key={key}>
                  <dt className="mb-1 text-gray md:text-lg md:text-lg">{key}</dt>
                  <dd className="text-lg text-black font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          )}
          <div className="mx-1 mt-3">
            <Button content="수정하기" disabled />
          </div>
        </div>
      </div>
      <div className="w-full h-[600px] border border-gray rounded my-12 overflow-auto">
        <div className="px-12">
          <ItemTitle
            itemMainTitle="나의 평점"
            itemSubTitle="내가 받은 평점을 확인해요."
            itemToggle={true}
          />
          <ScoreBoard />
        </div>
      </div>
    </>
  );
};

export default MyPage;
