import { useForm } from "react-hook-form";
import { useUpdateUseditemQuestion } from "../../../commons/hooks/mutations/useUpdateUseditemQuestion";
import { ICommentProps } from "../write/Comment.types";
import * as S from "./Comment.Edit.styles";

export default function CommentEdit(props: any) {
  const { register, handleSubmit, setValue } = useForm();
  const { updateUseditemQuestionSubmit } = useUpdateUseditemQuestion();
  const onUpdateComment = (data: ICommentProps) => {
    void updateUseditemQuestionSubmit(data, props?.useditemQuestionId);
    props.setIsUpdateId();
    setValue("contents", "");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onUpdateComment)}>
        <S.QuestionWrapper>
          <S.QuestionInput
            placeholder="내용을 입력해 주세요."
            {...register("contents")}
            defaultValue={props.defaultValue}
          />
        </S.QuestionWrapper>
        <S.WriteButtonWrapper>
          <S.CancelButton
            type="button"
            onClick={props.onClickUpdateComment("")}
          >
            취소하기
          </S.CancelButton>
          <S.WriteButton>작성하기</S.WriteButton>
        </S.WriteButtonWrapper>
      </form>
    </>
  );
}
