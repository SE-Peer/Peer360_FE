// import { useForm } from 'react-hook-form';

import ReviewInput from '@/Components/ReviewInput';
import BookSearchBar from '@/Components/BookSearchBar';
import Button from '@/Components/Button';
import Header from '@/Components/Header';
import ItemTitle from '@/Components/ItemTitle';

export const AddReview = () => (
  // const {
  //   handleSubmit,
  //   formState: { isSubmitting },
  // } = useForm({
  //   mode: 'onSubmit',
  // });
  // const handleSubmitButton: SubmitHandler<any> = (data) => {
  //   alert(JSON.stringify(data));
  // };
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
        <Button content="취소" color="mainColor" />
        <Button isSubmit content="등록" color="mainColor" />
      </div>
    </form>
  </>
);

export default AddReview;
