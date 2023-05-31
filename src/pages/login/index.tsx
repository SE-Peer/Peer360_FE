import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Modo } from '@/assets/modo.svg';
import { ReactComponent as Banner } from '@/assets/login-banner.svg';
import Input from '@/Components/Input';
import Button from '@/Components/Button';

export const LoginPage = () => {
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

  useEffect(() => {
    document.querySelector('body')!.style.width = '100%';

    return () => {
      document.querySelector('body')!.style.width = '1270px';
      document.querySelector('body')!.style.margin = '0 auto';
    };
  }, []);

  return (
    <main className="flex w-full min-w-[1270px]">
      <section className="w-1/2 h-screen gap-10 bg-[#FDEEDF] flex items-center flex-col justify-center">
        <Suspense fallback={<>로딩</>}>
          <Modo />
          <Banner />
        </Suspense>
      </section>
      <section className="h-screen flex flex-col items-center justify-center w-1/2">
        <div className="w-3/4 mx-auto">
          <h1 className="text-left mb-14">로그인</h1>
          <form className="w-full flex flex-col" onSubmit={handleSubmit(handleSubmitButton)}>
            <Input
              label="이메일"
              identity="이메일"
              autoselected
              message={errors.userId?.message?.toString()}
              context={register('userId', {
                required: '이메일을 입력하세요.',
              })}
            />
            <Input
              label="비밀번호"
              identity="비밀번호"
              message={errors.password?.message?.toString()}
              context={register('password', {
                required: '비밀번호를 입력하세요',
                minLength: {
                  value: 6,
                  message: '6자리 이상 비밀번호를 사용하세요',
                },
              })}
            />
            <div className="py-3" />
            <Button isSubmit color="gray" content="로그인" disabled={isSubmitting} />
          </form>
          <p className="text-gray mt-5">아이디/비밀번호를 잊으셨나요?</p>
        </div>
        <span className="absolute text-gray flex gap-3 bottom-10 whitespace-nowrap">
          아직 회원이 아니신가요?{' '}
          <Link to="/signup" className="text-yellow-600">
            회원가입 하러 가기
          </Link>
        </span>
      </section>
    </main>
  );
};

export default LoginPage;
