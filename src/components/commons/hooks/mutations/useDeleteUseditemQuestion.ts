import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";

interface IRef {
  __ref: string;
}

const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

export const useDeleteUseditemQuestion = () => {
  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);

  const onClickDeleteItemQuestion = (useditemQuestionId) => async (event) => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev: IRef[]) => {
                const deletedId = data.deleteUseditemQuestion;
                const filteredPrev = prev.filter(
                  (el) => !el.__ref.includes(deletedId)
                );
                return [...filteredPrev];
              },
            },
          });
        },
      });
      Modal.success({ content: "댓글이 삭제되었습니다" });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    onClickDeleteItemQuestion,
  };
};
