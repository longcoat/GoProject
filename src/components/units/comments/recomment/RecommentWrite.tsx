import { Modal } from "antd";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useCreateUseditemQuestionAnswer } from "../../../commons/hooks/mutations/useCreateUseditemQuestionAnswer";
import { useUpdateUseditemQuestionAnswer } from "../../../commons/hooks/mutations/useUpdateUseditemQuestionAnswer";
import * as S from "./RecommentWrite.styles";

export default function RecommentWrite(props: any) {
  const { createUseditemQuestionAnswerSubmit } =
    useCreateUseditemQuestionAnswer();
  const { updateUseditemQuestionAnswerSubmit } =
    useUpdateUseditemQuestionAnswer();
  // const [userInfo] = useRecoilState(userInfoState);
  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      contents: "",
    },
  });

  // 수정등록 몽땅 이기능으로
  const onClickQuestionAnswer = (data: any) => {
    if (props.isEditRecomment === true) {
      void updateUseditemQuestionAnswerSubmit(data, props.QuestionAnswerId);
      props.setIsEditRecomment((prev) => !prev);
      props.setOpenWrite(false);
      Modal.success({
        content: "답글이 수정되었습니다",
      });
    } else {
      void createUseditemQuestionAnswerSubmit(data, props.QuestionId);
      // props.setRecommentOpen(props.QuestionId);
      props.setOpenWrite(false);
      Modal.success({
        content: "답글이 등록되었습니다",
      });
    }
  };

  useEffect(() => {
    if (props.defaultValue) {
      const resetData = {
        contents: props.defaultValue,
      };
      reset({ ...resetData });
    }
  }, [props.defaultValue]);

  const onClickCheckFunction = () => {
    if (props.isEditRecomment) {
      onClickCancelEdit();
    } else {
      props.onClickRecomment(props.QuestionId);
    }
  };

  const onClickCancelEdit = () => {
    props.setIsEditRecomment((prev) => !prev);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickQuestionAnswer)}>
        <S.AnswerWrapper>
          <S.AnswerContents>
            <S.QuestionInput1
              placeholder="내용을 입력해 주세요."
              defaultValue={props.defaultValue}
              {...register("contents")}
            />
          </S.AnswerContents>
          <S.WriteButtonWrapper1>
            <S.WriteButton1 type="button" onClick={onClickCheckFunction}>
              취소하기
            </S.WriteButton1>
            <S.WriteButton2>
              {" "}
              {props.isEditRecomment === true ? "수정하기" : "작성하기"}
            </S.WriteButton2>
          </S.WriteButtonWrapper1>
        </S.AnswerWrapper>
      </form>
    </>
  );
}
