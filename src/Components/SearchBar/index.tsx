import { SearchBarProps } from './types';

export default function SearchBar(props: SearchBarProps) {
  const { content = 'Button' } = props;
  return (
    <>
      <div>
        <input
          className="w-full  py-2 pl-10 drop-shadow-xl content-center rounded-xl border-black bg-white text-lg  "
          type="text"
          disabled={true}
          placeholder={content}
          required
        ></input>
      </div>
    </>
  );
}
