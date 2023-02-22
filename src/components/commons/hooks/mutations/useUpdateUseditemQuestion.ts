import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";

export const UPDATE_USER_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $useditemQuestionId: ID!
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
  ) {
    updateUseditemQuestion(
      useditemQuestionId: $useditemQuestionId
      updateUseditemQuestionInput: $updateUseditemQuestionInput
    ) {
      _id
    }
  }
`;

interface IRef {
  __ref: string;
}

export const useUpdateUseditemQuestion = () => {
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USER_ITEM_QUESTION);

  const updateUseditemQuestionSubmit = async (
    data: any,
    useditemQuestionId: any
  ) => {
    try {
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: String(useditemQuestionId),
          updateUseditemQuestionInput: {
            ...data,
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev: IRef[]) => {
                const newSet = new Set([data.updateUseditemQuestion, ...prev]);
                const updateData = Array.from(newSet);
                return [updateData];
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
    updateUseditemQuestionSubmit,
  };
};
