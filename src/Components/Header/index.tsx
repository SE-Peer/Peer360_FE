import { Link, useNavigate } from 'react-router-dom';
import { BsPlusSquare, BsPeople } from 'react-icons/bs';
import React from 'react';
import toast from 'sweetalert2';

// import { ReactComponent as MODO } from '@/assets/small-modo.svg';

interface INavBarList {
  icons: React.ReactElement;
  text: string;
  goTo: string;
}

export const Header = () => {
  const navigate = useNavigate();

  const NavBarList: INavBarList[] = [
    {
      icons: <BsPlusSquare />,
      text: '프로젝트',
      goTo: 'mainpage',
    },
    // {
    //   icons: <BsHeart />,
    //   text: '리뷰 작성하기',
    //   goTo: 'wishlist',
    // },
    // {
    //   icons: <BsChat />,
    //   text: '채팅',
    //   goTo: 'chat',
    // },
    {
      icons: <BsPeople />,
      text: '마이 페이지',
      goTo: 'mypage',
    },
  ];

  return (
    <header className="w-full flex py-3 justify-between ">
      <div
        className=" py-3 cursor-pointer font-bold text-[42px] text-lime-600"
        onClick={() => {
          navigate('/mainPage');
        }}
      >
        PEER 360
      </div>
      <div>
        <div
          className="text-right text-sm cursor-pointer "
          onClick={() => {
            localStorage.clear();
            toast.fire({
              icon: 'error',
              title: '로그아웃 되었어요!',
              showConfirmButton: false,
              timer: 1500,
            });
            navigate('/login');
          }}
        >
          로그아웃
        </div>
        <div className="flex  gap-2  py-3 justify-between last:border-none remove-border-right">
          {NavBarList.map((item, idx) => (
            <Link to={`/${item.goTo}`} key={idx}>
              <p className="flex border-r-2 border-gray justify-center items-center gap-2 px-3">
                {item.icons}
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
