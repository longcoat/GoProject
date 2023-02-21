import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/stores";
import { useDeleteUseditemQuestionAnswer } from "../../../commons/hooks/mutations/useDeleteUseditemQuestionAnswer";
import { useFetchUseditemQuestionAnswers } from "../../../commons/hooks/queries/useFetchUseditemQuestionAnswers";
import { useFetchUserLoggedIn } from "../../../commons/hooks/queries/useFetchUserLoggedIn";
import RecommentWrite from "../recomment/RecommentWrite";
import * as S from "./RecommentDetail.styles";

export default function ReCommentDetail(props: any) {
  const { data } = useFetchUseditemQuestionAnswers(props.QuestionId);
  const { onDeleteItemQuestionAnswer } = useDeleteUseditemQuestionAnswer();
  const [isEditRecomment, setIsEditRecomment] = useState(false);

  const [userInfo] = useRecoilState(userInfoState);
  const { data } = useFetchUserLoggedIn();
  console.log(data, "detailcommentdata-----");

  useEffect(() => {
    setInfoUser({ ...data?.fetchUserLoggedIn });
  }, [data]);

  console.log(userInfo, "userInfoRecommnent-----");
  return (
    <>
      {data?.fetchUseditemQuestionAnswers ? (
        data.fetchUseditemQuestionAnswers.map((el, index) => (
          <S.AnswerWrapper key={el._id}>
            {!isEditRecomment ? (
              <>
                <S.Answer>답변</S.Answer>
                {userInfo._id ===
                  data?.fetchUseditemQuestionAnswers[index].user._id && (
                  <>
                    <ButtonWrapper>
                      <EditButton></EditButton>
                      <DeleteButton></DeleteButton>
                    </ButtonWrapper>
                  </>
                )}
                <S.Date1>2023.03.31</S.Date1>
                <S.AnswerContents></S.AnswerContents>
              </>
            ) : (
              <></>
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
