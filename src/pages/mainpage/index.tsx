import Banner from '@/Components/Banner';
import Header from '@/Components/Header';
import ItemTitle from '@/Components/ItemTitle';
import ItemList from '@/Components/ItemList';
import UserRank from '@/Components/UserRank';

export const MainPage = () => (
  <>
    <Header />
    <Banner />
    <div className="flex-col my-5">
      <div className="flex">
        <div className="w-4/5">
          <ItemTitle itemMainTitle="수원시" itemSubTitle="의 매물" itemToggle={true} />
          <ItemList itemName="원씽 The One Thing" itemPrice="500" itemState="대여가능" />
        </div>
        <div className="w-1/5">
          <ItemTitle itemMainTitle="" itemSubTitle="사용자 랭킹" itemToggle={true} />
          <UserRank UserRankName="박시연의 도서관" UserRankGrade="1위" />
        </div>
      </div>
      <div className="flex">
        <div className="w-4/5">
          <ItemTitle itemMainTitle="최신 매물" itemSubTitle="" itemToggle={true} />
          <ItemList itemName="원씽 The One Thing" itemPrice="500" itemState="대여가능" />
        </div>
        <div className="w-1/5">
          <ItemTitle itemMainTitle="" itemSubTitle="인기 대여 책" itemToggle={true} />
          <UserRank UserRankName="구멍가게 이야기" UserRankGrade="박시연의 도서관" />
        </div>
      </div>
    </div>
  </>
);

export default MainPage;
