import * as S from "./Reply.styles";

export default function ReplyWrite() {
  return (
    <>
      <S.QuestionWrapper>
        <S.QuestionInput placeholder="내용을 입력해 주세요." />
      </S.QuestionWrapper>
      <S.WriteButtonWrapper>
        <S.WriteButton>작성하기</S.WriteButton>
      </S.WriteButtonWrapper>
    </>
  );
}
