import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import { IFormLogin } from "../../../units/login/Login.types";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const LoginUser = () => {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const UserLogin = async (data: IFormLogin) => {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(result);
      if (accessToken === undefined) {
        Modal.error({ content: "로그인에 실패했습니다" });
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      Modal.success({ content: "로그인에 성공했습니다" });
      void router.push("/");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    UserLogin,
  };
};
