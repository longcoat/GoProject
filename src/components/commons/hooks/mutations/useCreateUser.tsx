import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;

export const useCreateUser = () => {
  const router = useRouter();
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const CreateUserSubmit = async (data: any) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            ...data,
          },
        },
      });
      Modal.success({ content: "회원가입을 축하합니다" });
      void router.push("/login");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    CreateUserSubmit,
  };
};
