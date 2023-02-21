import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";

interface IRef {
  __ref: string;
}

const DELETE_USED_ITEM_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;

export const useDeleteUseditemQuestionAnswer = () => {
  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USED_ITEM_ANSWER);

  const onDeleteItemQuestionAnswer =
    (useditemQuestionAnswerId) => async (event) => {
      try {
        await deleteUseditemQuestionAnswer({
          variables: {
            useditemQuestionAnswerId,
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchUseditemQuestionsAnswers: (prev: IRef[]) => {
                  const deletedId = data?.deleteUseditemQuestionAnswer;
                  const filteredPrev = prev.filter(
                    (el) => !el.__ref.includes(deletedId)
                  );
                  return [...filteredPrev];
                },
              },
            });
          },
        });
        Modal.success({ content: "답변이 삭제되었습니다" });
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    };

  return {
    onDeleteItemQuestionAnswer,
  };
};
