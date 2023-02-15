import * as S from "./Join.styles";

export default function Join() {
  return (
    <>
      <S.Wrapper>
        <S.JoinHeader>JOIN MEMBER</S.JoinHeader>
        <S.JoinLine1></S.JoinLine1>
        <S.JoinBody>
          <S.InfoWrapper>
            <S.IdWrapper>
              <S.Id>아이디</S.Id>
              <S.IdInput placeholder="이메일 아이디를 @까지 정확하게 입력하세요" />
            </S.IdWrapper>
            <S.PasswordWrapper>
              <S.Password>비밀번호</S.Password>
              <S.PassInput placeholder="영문+숫자 조합 8~16자리를 입력해주세요." />
            </S.PasswordWrapper>
            <S.PassCheckWrapper>
              <S.PassCheck>비밀번호 확인</S.PassCheck>
              <S.PassCheckInput placeholder="영문+숫자 조합 8~16자리를 입력해주세요." />
            </S.PassCheckWrapper>
            <S.NameWrapper>
              <S.Name>이름</S.Name>
              <S.NameInput placeholder="ex) 홍길동" />
            </S.NameWrapper>
          </S.InfoWrapper>
        </S.JoinBody>
        <S.JoinLine2></S.JoinLine2>
        <S.JoinFooter>
          <S.JoinWrapper>
            <S.CancelButton>취소</S.CancelButton>
            <S.ConfirmButton>확인</S.ConfirmButton>
          </S.JoinWrapper>
        </S.JoinFooter>
      </S.Wrapper>
    </>
  );
}
