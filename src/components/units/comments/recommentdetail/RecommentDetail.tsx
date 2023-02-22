import { useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/stores";
import { useDeleteUseditemQuestionAnswer } from "../../../commons/hooks/mutations/useDeleteUseditemQuestionAnswer";
import { useFetchUseditemQuestionAnswers } from "../../../commons/hooks/queries/useFetchUseditemQuestionAnswers";
import RecommentWrite from "../recomment/RecommentWrite";
import * as S from "./RecommentDetail.styles";

export default function ReCommentDetail(props: any) {
  const { data } = useFetchUseditemQuestionAnswers(props.QuestionId);
  const { onDeleteItemQuestionAnswer } = useDeleteUseditemQuestionAnswer();
  const [isEditRecomment, setIsEditRecomment] = useState(false);
  const [clickedAnswerId, setClickedAnswerId] = useState("");
  const [userInfo] = useRecoilState(userInfoState);

  const onClickEditRecomment = (e) => {
    setIsEditRecomment((prev) => !prev);
    setClickedAnswerId(e.currentTarget.id);
  };

  return (
    <>
      {data?.fetchUseditemQuestionAnswers ? (
        data?.fetchUseditemQuestionAnswers?.map((el, index) => (
          <S.AnswerWrapper key={el._id}>
            {!isEditRecomment ? (
              <>
                <S.AnswerBox>
                  <S.AnswerContainer>
                    <S.Answer>답변</S.Answer>
                    {userInfo._id ===
                      data?.fetchUseditemQuestionAnswers[index].user._id && (
                      <>
                        <S.ButtonWrapper>
                          <S.ModifyWrapper
                            type="button"
                            id={data.fetchUseditemQuestionAnswers[index]._id}
                            onClick={onClickEditRecomment}
                          >
                            <S.Modify src="/pencil.png" />
                          </S.ModifyWrapper>
                          <S.DeleteWrapper
                            type="button"
                            onClick={onDeleteItemQuestionAnswer(
                              String(
                                data.fetchUseditemQuestionAnswers[index]._id
                              )
                            )}
                          >
                            <S.Delete src="/delete.png" />
                          </S.DeleteWrapper>
                        </S.ButtonWrapper>
                      </>
                    )}
                  </S.AnswerContainer>
                  <S.Date1>
                    {" "}
                    {data.fetchUseditemQuestionAnswers[index].createdAt.slice(
                      0,
                      10
                    )}
                  </S.Date1>
                  <S.AnswerContents>
                    {data.fetchUseditemQuestionAnswers[index].contents}
                  </S.AnswerContents>
                </S.AnswerBox>
              </>
            ) : (
              <>
                {userInfo._id ===
                  data?.fetchUseditemQuestionAnswers[index].user._id &&
                clickedAnswerId ===
                  data.fetchUseditemQuestionAnswers[index]._id ? (
                  <>
                    <RecommentWrite
                      defaultValue={
                        data?.fetchUseditemQuestionAnswers[index].contents
                      }
                      isEditRecomment={isEditRecomment}
                      setIsEditRecomment={setIsEditRecomment}
                      setClickedAnswerId={setClickedAnswerId}
                      QuestionAnswerId={
                        data?.fetchUseditemQuestionAnswers[index]._id
                      }
                      // clickedAnswerId={clickedAnswerId}
                    />
                  </>
                ) : (
                  <>
                    <S.Answer>답변</S.Answer>
                    <S.Date1>
                      {" "}
                      {data.fetchUseditemQuestionAnswers[index].createdAt.slice(
                        0,
                        10
                      )}
                    </S.Date1>
                    <S.AnswerContents>
                      {data.fetchUseditemQuestionAnswers[index].contents}
                    </S.AnswerContents>
                  </>
                )}
              </>
            )}
          </S.AnswerWrapper>
        ))
      ) : (
        <>
          <RecommentWrite
            defaultValue={data?.fetchUseditemQuestionAnswers[index].contents}
            isEditRecomment={isEditRecomment}
            setIsEditRecomment={setIsEditRecomment}
            QuestionAnswerId={data?.fetchUseditemQuestionAnswers[index]._id}
          />
        </>
      )}
    </>
  );
}
