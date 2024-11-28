import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

function google() {
  const router = useRouter();
  const { code } = router.query;

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `http://ec2-3-38-49-253.ap-northeast-2.compute.amazonaws.com:8080/oauth/callback?code=${code}&provider=google`
      );
      const data = response.data;

      if (!data) {
        throw Error('AccessToken Error');
      }

      setSession(data.accessToken);
      setSession(data.name);
    } catch (error) {
      console.log('소셜 로그인 에러');
      throw error;
    }
  };

  return <div>google</div>;
}

export default google;
