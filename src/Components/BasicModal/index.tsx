import { useForm, SubmitHandler } from 'react-hook-form';
import React from 'react';

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
    alert(JSON.stringify(data));
  };
  return (
    <div className="w-[1270px] h-[550px] z-[999] absolute top-50 bg-white border border-gray rounded-xl ">
      <div className="px-3">
        <div className="pb-8">
          <ItemTitle
            itemMainTitle="프로젝트 등록"
            itemSubTitle="프로젝트를 등록하세요"
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
  );
}
