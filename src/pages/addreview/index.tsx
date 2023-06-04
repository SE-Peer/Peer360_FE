// import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';

import ReviewInput from '@/Components/ReviewInput';
import Button from '@/Components/Button';
import Header from '@/Components/Header';
import ItemTitle from '@/Components/ItemTitle';

export default function AddReview() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <form className="w-full flex flex-col">
        <div className="flex w-full pb-10">
          <ItemTitle itemMainTitle="리뷰 작성하기" itemSubTitle=" " itemToggle={false} />
        </div>
        <div>
          <ReviewInput />
        </div>
        <div className="flex gap-2 py-8 justify-end ">
          <div
            onClick={() => {
              navigate('/mainPage');
            }}
          >
            <Button content="취소" color="mainColor" />
          </div>
          <div>
            <Button isSubmit content="등록" color="mainColor" />
          </div>
        </div>
      </form>
    </>
  );
}
