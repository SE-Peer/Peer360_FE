import Header from '@/Components/Header';

export const MainPage = () => (
  <>
    <Header />
    <div
      className=" flex flex-col cursor-pointer font-bold text-[42px] text-green"
      onClick={() => {
        navigate('/');
      }}
    >
      메인 페이지 입니다
    </div>
  </>
);

export default MainPage;
