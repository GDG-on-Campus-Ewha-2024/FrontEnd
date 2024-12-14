import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function App({ Component, pageProps, router }: AppProps) {
  const protectedRoutes = ["/writeLetter"];
  const isProtected = protectedRoutes.includes(router.pathname);

  return (
    <>
      <Header />

      {isProtected ? (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
