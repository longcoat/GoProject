import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USER_LOGGEDIN } from "../queries/useFetchUserLoggedIn";

const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
    }
  }
`;

export const useCreatePointTransactionOfBuyingAndSelling = () => {
  const router = useRouter();
  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  const createPointTransactionOfBuyingAndSellingSubmit = async (
    useritemId: string
  ) => {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId,
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGEDIN,
          },
        ],
      });
      if (result?.data === null || result?.data === undefined) return;
      Modal.success({ content: "상품 구입이 완료되었습니다" });
      void router.push("/brand");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    createPointTransactionOfBuyingAndSellingSubmit,
  };
};
