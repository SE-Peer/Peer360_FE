import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'sweetalert2';

import Button from '@/Components/Button';

import ItemTitle from '../ItemTitle';
import { ReviewModalProps } from './types';
import StarRating from '../StarRating';
import SurveyKeywords from '../SurveyKeywords';

interface ReviewItems {
  [key: string]: number;
}

export default function ReviewModal(props: ReviewModalProps) {
  const { projectName = '프로젝트명' } = props;
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const toggleKeyword = (keyword: string) => {
    setSelectedKeywords((prevSelectedKeywords) => {
      if (prevSelectedKeywords.includes(keyword)) {
        return prevSelectedKeywords.filter((k) => k !== keyword);
      }
      return [...prevSelectedKeywords, keyword];
    });
  };
  const [isShownReviewModal, setIsShownReviewModal] = useState<boolean>(false);
  const keywordItems = [
    '문서정리의 신',
    '소통왕',
    '긍정적',
    '회의주도',
    '100점',
    '친절',
    '분노유발',
    '강압적',
    '팀워크',
    '캐리',
    '버스기사',
    '프로탑승러',
    'TMI남발러',
    '선천적리더',
    '버럭이',
    '유령',
    '4년째새내기',
    '독불장군',
    '신데렐라',
    '학포자',
    '솔플러',
    '서번트리더',
    '핑프',
    '프로친목러',
    '연락읽씹',
    '복붙러',
    '잠수부',
  ];
  const toggleReviewModal = () => {
    setIsShownReviewModal(!isShownReviewModal);
  };

  const [teamMember, setTeamMember] = useState([]);
  const { handleSubmit, register } = useForm();

  useEffect(() => {
    axios
      .get(
        `http://ec2-43-200-3-215.ap-northeast-2.compute.amazonaws.com:8081/projects/${projectName}`,
      )
      .then((res) => {
        setTeamMember(res.data.participants);
      });
  }, [projectName]);

  const onSubmit: SubmitHandler<any> = (data: any) => {
    const {
      revieweeEmail,
      additionalProp1,
      additionalProp2,
      additionalProp3,
      additionalProp4,
      additionalProp5,
      additionalProp6,
      additionalProp7,
      additionalProp8,
      additionalProp9,
      additionalProp10,
    } = data;

    const reviewItems: ReviewItems = {
      '업무에 필요한 지식이 풍부한가?': additionalProp1 || 0,
      '자신의 능력을 바탕으로 주어진 업무를 잘 수행하는가?': additionalProp2 || 0,
      '업무 전반적인 진행 상황을 이해하고, 계획에 따라 실천하는 능력이 탁월한가?':
        additionalProp3 || 0,
      '개인의 창의성을 토대로, 업무의 효율 및 효과를 극대화하는 능력이 탁월한가?':
        additionalProp4 || 0,
      '주어진 환경의 변화에 대해 대처 능력이 뛰어난가?': additionalProp5 || 0,
      '타인과의 업무 진행이 효율적인가?': additionalProp6 || 0,
      '타인과의 원만한 관계를 이끌어내는가?': additionalProp7 || 0,
      '주어진 업무에 대해 책임감을 갖고 있는가?': additionalProp8 || 0,
      '리더십이 있나요?': additionalProp9 || 0,
      '도덕성이 있나요?': additionalProp10 || 0,
    };

    const selectedKeywordItems = selectedKeywords.map((keyword) => keyword.replace(/ /g, ''));
    const myData = {
      projectName,
      revieweeEmail,
      reviewerEmail: localStorage.getItem('userId'),
      keywordItems: selectedKeywordItems,
      reviewItems,
      reviewId: localStorage.getItem('ranId'),
    };

    axios
      .post(
        'http://ec2-43-200-174-159.ap-northeast-2.compute.amazonaws.com:8081/reviews',
        JSON.stringify(myData),
        { headers: { 'Content-Type': 'application/json' } },
      )
      .then(() => {
        toggleReviewModal();
        toast.fire({
          icon: 'success',
          title: '리뷰작성 완료!',
          showConfirmButton: false,
          timer: 1500,
        });
        axios.patch(
          `http://ec2-43-200-174-159.ap-northeast-2.compute.amazonaws.com:8081/projects/${projectName}/status/review-completed`,
        );
      })
      .catch(() => {});
  };

  return (
    <>
      {!isShownReviewModal && (
        <div className="w-[1200px] h-[600px] overflow-auto z-[999] absolute inset-0 mx-[112px] my-52 bg-white border border-gray rounded-xl ">
          <div className="top-0 right-0">
            <button
              className="text-lime-600 text-[20px] px-2 py-2 font-bold"
              onClick={toggleReviewModal}
            >
              X
            </button>
          </div>
          <div className="px-12">
            <div className="pb-8 ">
              <ItemTitle itemMainTitle="리뷰 등록" itemSubTitle=" " itemToggle={true} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col px-10 ">
                <label
                  htmlFor="projectName"
                  className="block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  프로젝트명
                </label>
                <select
                  id="revieweeEmail"
                  className="border-2 border-[#aaaaaa] text-gray text-xs font-medium rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option value="" selected>
                    {projectName}
                  </option>
                </select>
                <label
                  htmlFor="revieweeEmail"
                  className="block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  리뷰할 팀원을 선택해주세요.
                </label>
                <select
                  id="revieweeEmail"
                  className="border-2 border-[#aaaaaa] text-gray text-xs font-medium rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  {...register('revieweeEmail')}
                >
                  <option value="">리뷰할 팀원을 선택해주세요.</option>
                  {teamMember.map((item: any, idx: any) => (
                    <option key={idx} value={item.email}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <label
                htmlFor="revieweeEmail"
                className="block px-12 text-sm font-medium text-gray-900 text-black"
              >
                <ItemTitle
                  itemMainTitle="키워드 리뷰"
                  itemSubTitle="키워드로 팀원을 평가해요."
                  itemToggle={true}
                />
                <SurveyKeywords
                  keywordItems={keywordItems}
                  toggleKeyword={toggleKeyword}
                  selectedKeywords={selectedKeywords}
                />
              </label>
              <div className="px-12">
                <ItemTitle
                  itemMainTitle="평점 리뷰"
                  itemSubTitle="점수로 팀원을 평가해요."
                  itemToggle={true}
                />
                <div className="flex flex-col  py-4">
                  <label
                    htmlFor="additionalProp1"
                    className="block mb-2 text-sm font-medium text-gray-900 text-black"
                  >
                    업무에 필요한 지식이 풍부한가?
                    <StarRating name="additionalProp1" register={register} />
                  </label>
                  <label
                    htmlFor="additionalProp2"
                    className="block mb-2 text-sm font-medium text-gray-900 text-black"
                  >
                    자신의 능력을 바탕으로 주어진 업무를 잘 수행하는가?
                    <StarRating name="additionalProp2" register={register} />
                  </label>
                  <label
                    htmlFor="additionalProp3"
                    className="block mb-2 text-sm font-medium text-gray-900 text-black"
                  >
                    업무 전반적인 진행 상황을 이해하고, 계획에 따라 실천하는 능력이 탁월한가?
                    <StarRating name="additionalProp3" register={register} />
                  </label>
                  <label
                    htmlFor="additionalProp3"
                    className="block mb-2 text-sm font-medium text-gray-900 text-black"
                  >
                    개인의 창의성을 토대로, 업무의 효율 및 효과를 극대화하는 능력이 탁월한가?
                    <StarRating name="additionalProp4" register={register} />
                  </label>
                  <label
                    htmlFor="additionalProp3"
                    className="block mb-2 text-sm font-medium text-gray-900 text-black"
                  >
                    주어진 환경의 변화에 대해 대처 능력이 뛰어난가?
                    <StarRating name="additionalProp5" register={register} />
                  </label>
                  <label
                    htmlFor="additionalProp3"
                    className="block mb-2 text-sm font-medium text-gray-900 text-black"
                  >
                    타인과의 업무 진행이 효율적인가?
                    <StarRating name="additionalProp6" register={register} />
                  </label>
                  <label
                    htmlFor="additionalProp3"
                    className="block mb-2 text-sm font-medium text-gray-900 text-black"
                  >
                    타인과의 원만한 관계를 이끌어내는가?
                    <StarRating name="additionalProp7" register={register} />
                  </label>
                  <label
                    htmlFor="additionalProp3"
                    className="block mb-2 text-sm font-medium text-gray-900 text-black"
                  >
                    주어진 업무에 대해 책임감을 갖고 있는가?
                    <StarRating name="additionalProp8" register={register} />
                  </label>
                  <label
                    htmlFor="additionalProp3"
                    className="block mb-2 text-sm font-medium text-gray-900 text-black"
                  >
                    리더십이 있나요?
                    <StarRating name="additionalProp9" register={register} />
                  </label>
                  <label
                    htmlFor="additionalProp3"
                    className="block mb-2 text-sm font-medium text-gray-900 text-black"
                  >
                    도덕성이 있나요?
                    <StarRating name="additionalProp10" register={register} />
                  </label>
                </div>
                <div className="pb-3">
                  <Button content="등록하기" isSubmit />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
