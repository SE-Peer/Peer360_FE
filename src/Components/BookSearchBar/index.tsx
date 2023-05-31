import { ReactComponent as Search } from '@/assets/search.svg';

import { BookSearchBarProps } from './types';

export default function BookSearchBar(props: BookSearchBarProps) {
  const { content = '검색바 내용' } = props;
  const SearchThisBook = function () {
    window.alert('Button Test');
  };
  return (
    <>
      <div className="flex">
        <input
          className="w-full  py-2 pl-2 drop-shadow-sm  rounded-lg  bg-[#F4F4F4] text-sm  "
          type="text"
          disabled={true}
          placeholder={content}
          required
        ></input>
        <div className="absolute py-1 px-72">
          <Search onClick={SearchThisBook} />
        </div>
      </div>
    </>
  );
}
