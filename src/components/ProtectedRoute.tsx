import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // hydration error가 떠서 초기 렌더링 시 아무것도 렌더링하지 않도록 수정
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (!token) {
      alert("로그인을 먼저 해주세요!");
      router.push("/");
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  // 이게 없으면 일단 writeLetter 페이지로 이동하고 alert이 뜬다...
  if (!isAuthenticated) {
    return null;
  }

  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
