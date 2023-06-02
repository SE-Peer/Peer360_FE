export default function ReviewInput() {
  return (
    <>
      <div className="border border-gray w-full h-full rounded-lg divide-y divide-gray divide-solid">
        <div className="h-[72px] py-6 px-6 text-gray">
          <div className="text-2xl font-bold flex">프로젝트 명</div>
        </div>

        <div className="h-full  h-[270px]  px-6 text-black text-md">
          <input
            type="text"
            className="h-[270px] w-full focus:outline-none "
            placeholder="내용을 작성해주세요."
          />
        </div>
      </div>
    </>
  );
}
