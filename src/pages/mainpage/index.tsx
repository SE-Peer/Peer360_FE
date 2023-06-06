import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '@/Components/Header';
import ItemList from '@/Components/ItemList';
import ItemTitle from '@/Components/ItemTitle';
import Button from '@/Components/Button';
import ModalBasic from '@/Components/BasicModal';

export const MainPage = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [cloudUrl, setCloudUrl] = useState<string>('');
  const [isUrl, setIsUrl] = useState<boolean>(false);
  const showModal = () => {
    setModalOpen(true);
  };
  useEffect(() => {
    axios
      .get(
        `http://ec2-43-200-3-215.ap-northeast-2.compute.amazonaws.com:8081/users/${localStorage.getItem(
          'userId',
        )}/reviews/wordcloud`,
      )
      .then((res) => {
        console.log(res);
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
      {modalOpen && <ModalBasic id=" " content="" title="" writer="" setModalOpen={setModalOpen} />}
      <div className="flex flex-col w-full">
        {/* <ItemTitle
          itemMainTitle="프로젝트 등록"
          itemSubTitle="새로운 프로젝트를 등록해보세요."
          itemToggle={true}
        /> */}
        <div onClick={showModal}>
          <Button content="프로젝트 등록하기" />
        </div>
        <ItemTitle
          itemMainTitle="나의 프로젝트"
          itemSubTitle="진행중인 프로젝트입니다."
          itemToggle={true}
        />
        <div className="flex px-12 gap-20">
          <ItemList
            itemUrl="https://github.com/turfguy"
            itemName="PEER360"
            itemPrice=""
            itemState="리뷰가능"
          />
          <ItemList
            itemUrl="https://github.com/turfguy"
            itemName="PEER360"
            itemPrice=""
            itemState="리뷰가능"
          />
          <ItemList
            itemUrl="https://github.com/turfguy"
            itemName="PEER360"
            itemPrice=""
            itemState="리뷰가능"
          />
        </div>
        <div>
          <ItemTitle
            itemMainTitle="나의 리뷰"
            itemSubTitle="나의 리뷰를 워드 클라우드로 확인해요."
            itemToggle={true}
          />
          <div className="flex px-[340px] w-full place-items-center">
            {isUrl && <img src={cloudUrl} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
