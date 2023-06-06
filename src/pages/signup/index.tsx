import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

import Button from '@/Components/Button';
import { ReactComponent as Banner } from '@/assets/login-banner.svg';
import Input from '@/Components/Input';
import HiddenInput from '@/Components/HiddenInput';

export const SignupPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: 'onSubmit',
  });
  const handleSubmitButton: SubmitHandler<any> = (data) => {
    alert(JSON.stringify(data));

    axios
      .post(
        'http://ec2-43-200-3-215.ap-northeast-2.compute.amazonaws.com:8081/users',
        JSON.stringify(data),
        { headers: { 'Content-Type': 'application/json' } },
      )
      .then((res) => {
        console.log(res);
        navigate('/login');
      });
  };
  useEffect(() => {
    document.querySelector('body')!.style.width = '100%';

    return () => {
      document.querySelector('body')!.style.width = '1270px';
      document.querySelector('body')!.style.margin = '0 auto';
    };
  }, []);
  return (
    <main className="flex w-full min-w-[1270px]">
      <section className="w-1/2 h-screen gap-10 bg-lime-600 flex items-center flex-col justify-center">
        {/* <Modo /> */}
        <div className="font-bold text-[60px] text-white">PEER 360</div>
        <Banner />
      </section>
      <section className="h-screen flex flex-col items-center justify-center w-1/2">
        <div className="w-3/4 mx-auto">
          <h1 className="text-left mb-3">회원가입</h1>
          <form className="w-full flex flex-col" onSubmit={handleSubmit(handleSubmitButton)}>
            <Input
              label="이메일"
              identity="이메일"
              placehd="영문으로 입력해주세요."
              autoselected
              message={errors.email?.message?.toString()}
              context={register('email', {
                required: '메일을 입력하세요.',
              })}
            />
            <HiddenInput
              label="비밀번호"
              identity="비밀번호"
              placehd="영문,숫자 포함 8자 이상으로 입력해주세요."
              message={errors.password?.message?.toString()}
              context={register('password', {
                required: '비밀번호를 입력하세요',
                minLength: {
                  value: 8,
                  message: '8자리 이상 비밀번호를 사용하세요',
                },
              })}
            />
            <Input
              label="github"
              identity="github"
              placehd="github URL을 입력해주세요."
              autoselected
              message={errors.githubUrl?.message?.toString()}
              context={register('githubUrl', {
                required: 'github url을 입력하세요.',
              })}
            />
            <Input
              label="이름 입력"
              identity="이름 입력"
              placehd="2글자 이상 입력해주세요."
              message={errors.name?.message?.toString()}
              context={register('name', {
                required: '이름을 입력하세요',
                minLength: {
                  value: 2,
                  message: '2자리 이상 이름을 사용하세요',
                },
              })}
            />

            <Input
              label="회사 입력"
              identity="회사 입력"
              placehd="소속한 회사의 이름을 입력해주세요."
              autoselected
              message={errors.company?.message?.toString()}
              context={register('company', {
                required: '',
              })}
            />
            <Input
              label="학교 입력"
              identity="학교 입력"
              placehd="소속한 학교의 이름을 입력해주세요."
              autoselected
              message={errors.school?.message?.toString()}
              context={register('school', {
                required: '',
              })}
            />
            <div className="py-3" />
            <Button isSubmit content="다음" disabled={isSubmitting} color="mainColor" />
          </form>
        </div>
        <span className=" text-gray flex gap-3 bottom-10 whitespace-nowrap">
          이미 계정이 있으신가요?{' '}
          <Link to="/login" className="text-green">
            로그인 하러 가기
          </Link>
        </span>
      </section>
    </main>
  );
};

export default SignupPage;
