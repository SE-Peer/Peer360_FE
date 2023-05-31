import { ReactComponent as Banner } from '@/assets/login-banner.svg';
import { ReactComponent as Arrow } from '@/assets/arrow.svg';

import { UserRankProps } from './types';

export default function UserRank(props: UserRankProps) {
  const { UserRankName = '박시연의 도서관', UserRankGrade = '다독왕' } = props;

  return (
    <>
      <div className="flex flex-col ">
        <div className="flex w-1/4 gap-1 my-1 place-items-center w-[250px] h-[85px] border rounded-xl border-gray">
          {/* <div className=" flex w-[60px]  h-[50px] mx-3 w-1/4 relative  border">
            <Banner className='' />
          </div> */}
          <Banner className=" flex w-[60px]  h-[50px] mx-3 w-1/4 relative  border border border-gray rounded-md"></Banner>
          <div className="flex flex-col w-3/4">
            <div className="mx-2 font-semibold font-sm flex">
              {UserRankName}
              <Arrow />
            </div>
            <div className="mx-2 font-xs ">{UserRankGrade}</div>
          </div>
        </div>
        <div className="flex w-1/4 gap-1 my-1 place-items-center w-[250px] h-[85px] border rounded-xl border-gray">
          {/* <div className=" flex w-[60px]  h-[50px] mx-3 w-1/4 relative  border">
            <Banner className='' />
          </div> */}
          <Banner className=" flex w-[60px]  h-[50px] mx-3 w-1/4 relative  border border-gray rounded-md"></Banner>
          <div className="flex flex-col w-3/4">
            <div className="mx-2 font-semibold font-sm flex">
              {UserRankName}
              <Arrow />
            </div>
            <div className="mx-2 font-xs ">{UserRankGrade}</div>
          </div>
        </div>
        <div className="flex w-1/4 gap-1 my-1 place-items-center w-[250px] h-[85px] border rounded-xl border-gray">
          {/* <div className=" flex w-[60px]  h-[50px] mx-3 w-1/4 relative  border">
            <Banner className='' />
          </div> */}
          <Banner className=" flex w-[60px]  h-[50px] mx-3 w-1/4 relative  border border-gray rounded-md"></Banner>
          <div className="flex flex-col w-3/4">
            <div className="mx-2 font-semibold font-sm flex">
              {UserRankName}
              <Arrow />
            </div>
            <div className="mx-2 font-xs ">{UserRankGrade}</div>
          </div>
        </div>
      </div>
    </>
  );
}
