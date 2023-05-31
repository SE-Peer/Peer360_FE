export default function BookInput() {
  return (
    <>
      <div className="border border-gray w-full h-full rounded-lg divide-y divide-gray divide-solid">
        <div className="h-[72px] py-6 px-6 text-gray">
          <div className="text-2xl font-bold flex">
            도서 제목
            <div className="text-xs py-3.5 px-1 font-medium">자동으로 입력됩니다.</div>
          </div>
        </div>
        <div className="h-[72px] py-6 px-6 text-black text-md ">
          <input
            className="focus:outline-none h-full w-full"
            type="text"
            placeholder="대여금을 책정해주세요"
          />
        </div>
        <div className="h-full  h-[270px]  px-6 text-black text-md">
          <input
            type="text"
            className="h-full w-full focus:outline-none "
            placeholder="내용을 작성해주세요."
          />
        </div>
      </div>
    </>
  );
}
