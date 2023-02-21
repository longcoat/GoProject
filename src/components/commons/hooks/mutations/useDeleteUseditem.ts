import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
} from "../../../../commons/types/generated/types";

const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const useDeleteUseditem = () => {
  const router = useRouter();
  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const onClickDeleteItem = (useditemId: string) => async (event: any) => {
    try {
      await deleteUseditem({
        variables: {
          useditemId,
        },
        //
        update(cache, { data }) {
          console.log(data);
          cache.modify({
            fields: {
              fetchUseditems: (prev, { readField }) => {
                const deletedId = data?.deleteUseditem;
                const filteredPrev = prev.filter(
                  (el: any) => readField("_id", el) !== deletedId
                );
                return [...filteredPrev];
              },
            },
          });
        },
      });
      Modal.success({ content: "상품이 삭제되었습니다" });
      void router.push(`/`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    onClickDeleteItem,
  };
};
