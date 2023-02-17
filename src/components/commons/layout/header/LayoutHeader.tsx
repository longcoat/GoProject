import { useRouter } from "next/router";
import * as S from "./LayoutHeader.styles";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickGoMain = () => {
    void router.push("/");
  };

  const onClickLogin = () => {
    void router.push("/login");
  };

  const onClickJoin = () => {
    void router.push("/join");
  };

  return (
    <>
      <S.Header>
        <S.LogoWrapper>
          <S.LogoImg src="/DINGCOlogo.png" onClick={onClickGoMain} />
        </S.LogoWrapper>
        <S.ButtonWrapper>
          <S.Text onClick={onClickLogin}>로그인</S.Text>
          <S.Text onClick={onClickJoin}>회원가입</S.Text>
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
