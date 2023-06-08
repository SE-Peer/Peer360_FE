import { useForm, SubmitHandler } from 'react-hook-form';
import React from 'react';
import axios from 'axios';
import toast from 'sweetalert2';

import Input from '@/Components/Input';
import Button from '@/Components/Button';

import ItemTitle from '../ItemTitle';
import { PartModalProps } from './types';

export default function PartModalBasic(props: PartModalProps) {
  const { id = 'id', content = 'Modal', title = 'hi', writer = 'me', setPartModalOpen } = props;

  const { register, handleSubmit } = useForm({
    mode: 'onSubmit',
  });
  const handleSubmitButton: SubmitHandler<any> = (data: JSON) => {
    const myData = {
      ...data,
      userEmail: localStorage.getItem('userId'),
      participationId: localStorage.getItem('ranId'),
    };
    axios
      .post(
        'http://ec2-43-200-174-159.ap-northeast-2.compute.amazonaws.com:8081/participations',
        JSON.stringify(myData),
        { headers: { 'Content-Type': 'application/json' } },
      )
      .then(() => {
        toast.fire({
          icon: 'success',
          title: '참여완료!',
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.replace('/mainPage');
      })
      .catch(() => {
        toast.fire({
          icon: 'error',
          title: '참여실패!',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <>
      <div className="w-[1270px] h-[550px] z-[999] absolute top-50 bg-white border border-gray rounded-xl ">
        <div className="top-0 right-0">
          <button
            className="text-lime-600 text-[20px] px-2 py-2 font-bold"
            onClick={setPartModalOpen}
          >
            X
          </button>
        </div>
        <div className="px-3">
          <div className="pb-8">
            <ItemTitle
              itemMainTitle="프로젝트 참여"
              itemSubTitle="프로젝트에 참여하세요"
              itemToggle={true}
            />
          </div>

          <form onSubmit={handleSubmit(handleSubmitButton)}>
            <div className="flex flex-col px-10">
              <Input
                label="프로젝트명"
                identity="projectName"
                autoselected
                //   message={errors.userId?.message?.toString()}
                context={register('projectName', {
                  required: '참여하려는 프로젝트명을 입력하세요.',
                })}
              />
              {id} {content} {title} {writer}
              <Button content="등록하기" isSubmit />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
