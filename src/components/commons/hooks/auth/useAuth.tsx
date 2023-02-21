import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useAuth = () => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null || undefined) {
      Modal.success({ content: "로그인 후 이용가능합니다!" });
      void router.push("/");
    }
  }, []);
};
