import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_USER_ITEM_QUESTION_ANSWER = gql`
  mutation createUseditemQuestionAnswer(
    $useditemQuestionId: ID!
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
  ) {
    createUseditemQuestionAnswer(
      useditemQuestionId: $useditemQuestionId
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
    ) {
      _id
    }
  }
`;

export const useCreateUseditemQuestionAnswer = () => {
  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USER_ITEM_QUESTION_ANSWER);

  const createUseditemQuestionAnswerSubmit = async (
    data: any,
    useditemQuestionId: string
  ) => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId,
          createUseditemQuestionAnswerInput: {
            ...data,
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev) => {
                return [data.createUseditemQuestionAnswer, ...prev];
              },
            },
          });
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    createUseditemQuestionAnswerSubmit,
  };
};
