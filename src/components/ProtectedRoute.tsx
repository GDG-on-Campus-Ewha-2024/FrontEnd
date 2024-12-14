import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = false;
  const router = useRouter();
  const redirected = useRef(false);

  // useRef 처음에 안썼더니, useEffect가 두 번 실행돼 alert이 두 번 뜨는 상황이 발생
  // 검색해보니, next는 개발 모드에서 React의 Strict Mode가 활성화되어있음
  // Strict Mode는 useEffect를 두 번 실행해 부작용이 있나 확인함...
  // 따라서 useEffect가 두 번 실행되는걸 막기 위해 useRef를 사용
  useEffect(() => {
    if (!isAuthenticated && !redirected.current) {
      redirected.current = true;
      alert("로그인을 먼저 해주세요!");
      router.push("/");
    }
  }, [isAuthenticated, router]);

  // 이게 없으면 일단 writeLetter 페이지로 이동하고 alert이 뜬다...
  if (!isAuthenticated) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
