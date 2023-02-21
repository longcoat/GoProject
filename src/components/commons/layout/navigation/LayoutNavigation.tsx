import { useRouter } from "next/router";
import * as S from "./LayoutNavigation.styles";
import Link from "next/link";

export default function LayoutNavigation() {
  const router = useRouter();
  const nowPage = router.asPath;

  return (
    <>
      <S.Navigation>
        <S.Text>BRAND</S.Text>
        <S.Text>CATEGORY</S.Text>
        <S.Text>LIFE</S.Text>
        <S.Text>BEAUTY</S.Text>
        <S.Text>|</S.Text>
        <S.Text>#STYLE</S.Text>
        <S.Text>EVENT</S.Text>
        <S.Text>BEST</S.Text>
        <>
          {nowPage === "/login" ? (
            <S.LoginPage>
              <Link href={"/join"}>
                <S.SubText>회원가입</S.SubText>
              </Link>
              <S.SubText>장바구니</S.SubText>
              <S.CountWrapper>
                <S.CountImg src="/whitecircle.png" />
                <S.CountNumber>0</S.CountNumber>
              </S.CountWrapper>
            </S.LoginPage>
          ) : nowPage === "/join" ? (
            <S.LoginPage>
              <Link href={"/login"}>
                <S.SubText>로그인</S.SubText>
              </Link>
              <S.SubText>장바구니</S.SubText>
              <S.CountWrapper>
                <S.CountImg src="/whitecircle.png" />
                <S.CountNumber>0</S.CountNumber>
              </S.CountWrapper>
            </S.LoginPage>
          ) : (
            <></>
          )}
        </>
      </S.Navigation>
    </>
  );
}
