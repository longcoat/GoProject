import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { useCreateUseditemQuestion } from "../../../commons/hooks/mutations/useCreateUseditemQuestion";
import * as S from "./Comment.styles";
import { ICommentProps, ICommentWriteProps } from "./Comment.types";

export default function CommentWrite(props: ICommentWriteProps) {
  const { register, handleSubmit, setValue } = useForm();
  const { createUseditemQuestionSubmit } = useCreateUseditemQuestion();
  const onClickCommentSubmit = (data: ICommentProps) => {
    console.log(data, "----commentdata");
    Modal.success({
      content: "댓글을 등록하였습니다.",
    });
    void createUseditemQuestionSubmit(data, props.useditemId);
    setValue("contents", "");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickCommentSubmit)}>
        <S.QuestionWrapper>
          <S.QuestionInput
            placeholder="내용을 입력해 주세요."
            {...register("contents")}
            defaultValue={props.defaultValue}
          />
        </S.QuestionWrapper>
        <S.WriteButtonWrapper>
          <S.WriteButton>작성하기</S.WriteButton>
        </S.WriteButtonWrapper>
      </form>
    </>
  );
}
