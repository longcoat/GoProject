import * as S from "./LayoutHeader.styles";

export default function LayoutHeader() {
  return (
    <>
      <S.Header>
        <S.LogoImg src="/DINGCOlogo.png" />
        <S.ButtonWrapper>
          <S.Text>로그인</S.Text>
          <S.Text>회원가입</S.Text>
          <S.Text>장바구니</S.Text>
          <S.CountWrapper>
            <S.CountImg src="/redcircle.png" />
            <S.CountNumber>0</S.CountNumber>
          </S.CountWrapper>
        </S.ButtonWrapper>
      </S.Header>
    </>
  );
}
