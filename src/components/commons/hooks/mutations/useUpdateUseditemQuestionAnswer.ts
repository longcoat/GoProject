import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../queries/useFetchUseditemQuestionAnswers";
import { FETCH_USED_ITEM_QUESTIONS } from "../queries/useFetchUseditemQuestions";

export const UPDATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $useditemQuestionAnswerId: ID!
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
  ) {
    updateUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
    ) {
      _id
    }
  }
`;

export const useUpdateUseditemQuestionAnswer = () => {
  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USED_ITEM_QUESTION_ANSWER);

  const updateUseditemQuestionAnswerSubmit = async (
    data: any,
    useditemQuestionAnswerId: any
  ) => {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: String(useditemQuestionAnswerId),
          updateUseditemQuestionAnswerInput: {
            ...data,
          },
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    updateUseditemQuestionAnswerSubmit,
  };
};
