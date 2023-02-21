import { useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/stores";
import RecommentWrite from "../recomment/RecommentWrite";
import * as S from "./RecommentDetail.styles";

export default function ReCommentDetail() {
  const [isEditRecomment, setIsEditRecomment] = useState(false);
  const [userInfo] = useRecoilState(userInfoState);
  return (
    // <>
    //   {data?.fetchUseditemQuestionAnswers ? (
    //     data.fetchUseditemQuestionAnswers.map((el, index) => (
    //         <S.AnswerWrapper key={el._id}>
    //           {!isEditRecomment ?
    //           (
    //             <>
    //           <S.Answer>답변</S.Answer>
    //           <S.Date1>2023.03.31</S.Date1>
    //           <S.AnswerContents></S.AnswerContents>
    //           </>
    //           ):(
    //             <>

    //           </>
    //           )}
    //           </S.AnswerWrapper>
    //     ))
    //   ) : (
    //     <>
    //       <RecommentWrite
    //         defaultValue={data.fetchUseditemQuestionAnswers[index].contents}
    //         isEditRecomment={isEditRecomment}
    //         setIsEditRecomment={setIsEditRecomment}
    //         QuestionAnswerId={data.fetchUseditemQuestionAnswers[index]._id}
    //       />
    //     </>
    //   )}
    // </>
    <></>
  );
}
