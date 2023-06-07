import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Header from '@/Components/Header';
import ItemList from '@/Components/ItemList';
import ItemTitle from '@/Components/ItemTitle';
import Button from '@/Components/Button';
import ModalBasic from '@/Components/BasicModal';
import PartModalBasic from '@/Components/PartBasicModal';
import MyItemList from '@/Components/MyItemList ';

export const MainPage = () => {
  const navigate = useNavigate();
  const [isShownModal, setIsShownModal] = useState<boolean>(false);
  const [isShownPartModal, setIsShownPartModal] = useState<boolean>(false);

  const toggleModal = () => {
    setIsShownModal(!isShownModal);
  };

  const togglePartModal = () => {
    setIsShownPartModal(!isShownPartModal);
  };

  const closeModalMainPage = () => {
    setIsShownModal(false);
    setIsShownPartModal(false);
  };

  return (
    <>
      <Header />
      <div
        className=" flex flex-col cursor-pointer font-bold text-[42px] text-green "
        onClick={() => {
          navigate('/mainPage');
        }}
      />
      {isShownModal && (
        <ModalBasic id=" " content="" title="" writer="" setModalOpen={toggleModal} />
      )}
      {isShownPartModal && (
        <PartModalBasic id=" " content="" title="" writer="" setPartModalOpen={togglePartModal} />
      )}
      <div className="flex flex-col w-full">
        {/* <ItemTitle
          itemMainTitle="프로젝트 등록"
          itemSubTitle="새로운 프로젝트를 등록해보세요."
          itemToggle={true}
        /> */}
        <div onClick={toggleModal}>
          <Button content="프로젝트 등록하기" />
        </div>
        <div onClick={togglePartModal}>
          <Button content="프로젝트 참여하기" />
        </div>
        <div onClick={closeModalMainPage}>
          <ItemTitle
            itemMainTitle="나의 프로젝트"
            itemSubTitle="내가 참여한 프로젝트입니다."
            itemToggle={true}
          />
        </div>
        <div className="flex flex-wrap px-12 gap-20 max-w-[1500px] " onClick={closeModalMainPage}>
          <MyItemList />
        </div>

        <div onClick={closeModalMainPage}>
          <ItemTitle
            itemMainTitle="전체 프로젝트"
            itemSubTitle="전체 프로젝트 목록입니다."
            itemToggle={true}
          />
        </div>

        <div className="flex flex-wrap px-12 gap-20 max-w-[1500px] " onClick={closeModalMainPage}>
          <ItemList />
        </div>
      </div>
    </>
  );
};

export default MainPage;
