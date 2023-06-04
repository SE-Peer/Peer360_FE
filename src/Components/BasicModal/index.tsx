import { useForm } from 'react-hook-form';

import Input from '@/Components/Input';
import Button from '@/Components/Button';

import ItemTitle from '../ItemTitle';
import { ModalProps } from './types';

export default function ModalBasic(props: ModalProps) {
  const { id = 'id', content = 'Modal', title = 'hi', writer = 'me', setModalOpen = true } = props;
  const closeModal = () => {
    setModalOpen(false);
  };
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const handleSubmitButton: SubmitHandler<any> = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="w-[1270px] h-[550px] z-[999] absolute top-50 bg-white border border-gray rounded-xl ">
      <div className="abosulte text-black text-right pr-3 py-1 cursor-pointer" onClick={closeModal}>
        X
      </div>
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
              identity="projectId"
              autoselected
              //   message={errors.userId?.message?.toString()}
              context={register('projectId', {
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
            <Button content="등록하기" isSubmit />
          </div>
        </form>
      </div>
    </div>
  );
}
