import { useForm, SubmitHandler } from 'react-hook-form';
import React from 'react';
import axios from 'axios';
import toast from 'sweetalert2';

import Input from '@/Components/Input';
import Button from '@/Components/Button';

import ItemTitle from '../ItemTitle';
import { ModalProps } from './types';

export default function ModalBasic(props: ModalProps) {
  const { id = 'id', content = 'Modal', title = 'hi', writer = 'me' } = props;

  const { register, handleSubmit } = useForm({
    mode: 'onSubmit',
  });
  const handleSubmitButton: SubmitHandler<any> = (data: JSON) => {
    const myData = {
      ...data,
      creatorEmail: localStorage.getItem('userId'),
      status: 'REVIEW_POSSIBLE',
    };
    axios
      .post(
        'http://ec2-43-200-3-215.ap-northeast-2.compute.amazonaws.com:8081/projects',
        JSON.stringify(myData),
        { headers: { 'Content-Type': 'application/json' } },
      )
      .then(() => {
        toast.fire({
          icon: 'success',
          title: '등록완료!',
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.replace('/mainPage');
      })
      .catch(() => {
        toast.fire({
          icon: 'error',
          title: '등록실패!',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <>
      <div className="w-[1270px] h-[550px] z-[999] absolute top-50 bg-white border border-gray rounded-xl ">
        <div className="top-0 right-0">
          <button className="text-lime-600 text-[20px] px-2 py-2 font-bold">X</button>
        </div>
        <div className="px-3">
          <div className="pb-8">
            <ItemTitle
              itemMainTitle="리뷰 등록"
              itemSubTitle="리뷰를 등록해주세요."
              itemToggle={true}
            />
          </div>

          <form onSubmit={handleSubmit(handleSubmitButton)}>
            <div className="flex flex-col px-10">
              <Input
                label="프로젝트명"
                identity="name"
                autoselected
                //   message={errors.userId?.message?.toString()}
                context={register('name', {
                  required: '프로젝트명을 입력하세요.',
                })}
              />
              <div className="hidden"></div>
              <Input
                label="프로젝트URL"
                identity="url"
                autoselected
                //   message={errors.userId?.message?.toString()}
                context={register('url', {
                  required: '프로젝트의 URL을 입력하세요.',
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
