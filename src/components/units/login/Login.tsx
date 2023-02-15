import * as S from "./Login.styles";

export default function Login() {
  return (
    <>
      <S.Wrapper>
        <S.LoginHeader>LOGIN</S.LoginHeader>
        <S.LoginLine></S.LoginLine>
        <S.LoginBody>
          <S.InfoWrapper>
            <S.IdWrapper>
              <S.Id>아이디</S.Id>
              <S.IdInput placeholder="이메일 아이디를 @까지 정확하게 입력하세요" />
            </S.IdWrapper>
            <S.PasswordWrapper>
              <S.Password>비밀번호</S.Password>
              <S.PassInput placeholder="영문+숫자 조합 8~16자리를 입력해주세요." />
            </S.PasswordWrapper>
          </S.InfoWrapper>
          <S.LoginWrapper>
            <S.LoginButton>로그인</S.LoginButton>
          </S.LoginWrapper>
        </S.LoginBody>
      </S.Wrapper>
    </>
  );
}
