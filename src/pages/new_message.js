import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-3-38-49-253.ap-northeast-2.compute.amazonaws.com:8080/',
});

function new_message() {
  const router = useRouter();

  const schema = yup.object().shape({
    toName: yup.string().required(),
    fromName: yup.string().required(),
    message: yup
      .string()
      .max(200, '최대 200자까지 작성 가능합니다.')
      .required(),
  });

  const { register, handleSubmit, watch } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    const requestData = {
      ...data,
      type: 'string',
    };
    console.log('폼 데이터 제출: ', requestData);

    try {
      const response = await api.post(`/messages`, requestData);
      console.log('편지 전송 성공: ', response.data);
      router.push(`/`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const formValues = watch();
  useEffect(() => {
    console.log('현재 폼 값:', formValues);
  }, [formValues]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-sky-50 w-screen h-screen flex flex-col items-center gap-6">
        <div className="text-5xl font-bold font-['Changwon'] mt-28 mb-14">
          💌 편지 보내기
        </div>
        <div className=" flex gap-10">
          <label className="text-3xl font-semibold font-['Hakyo']">
            To.{' '}
            <input
              type="text"
              name="toName"
              {...register('toName')}
              className="border-b-[3px] border-black bg-sky-50 text-2xl font-normal"
            />
          </label>
          <label className="text-3xl font-semibold font-['Hakyo'] mb-10">
            From.{' '}
            <input
              type="text"
              name="fromName"
              {...register('fromName')}
              className="border-b-[3px] border-black bg-sky-50 text-2xl font-normal"
            />
          </label>
        </div>
        <textarea
          type="text"
          name="message"
          {...register('message')}
          className="w-7/12 h-60 flex flex-wrap border-blue-500 border-[2px] font-medium text-xl"
        />
        <button
          type="submit"
          className="flex justify-center items-center py-3 px-[80px] rounded-2xl bg-blue-500 text-white font-semibold font-['Hakyo'] text-2xl"
        >
          보내기
        </button>
      </div>
    </form>
  );
}

export default new_message;
