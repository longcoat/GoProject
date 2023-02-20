import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";

export const useLogoutUser = () => {
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const logoutUser = async () => {
    localStorage.removeItem("accessToken");
    setAccessToken("");
    Modal.success({ content: "로그아웃 하셨습니다." });
    location.reload();
  };

  return {
    logoutUser,
  };
};
