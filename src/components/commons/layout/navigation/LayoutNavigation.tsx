import { useRouter } from "next/router";
import * as S from "./LayoutNavigation.styles";
import Link from "next/link";

export default function LayoutNavigation() {
  const router = useRouter();
  const nowPage = router.asPath;

  return (
    <>
      <S.Navigation>
        <Link href={"/"}>
          <S.Text>BRAND</S.Text>
        </Link>
        <Link href={"/"}>
          <S.Text>CATEGORY</S.Text>
        </Link>
        <Link href={"/"}>
          <S.Text>LIFE</S.Text>
        </Link>
        <Link href={"/"}>
          <S.Text>BEAUTY</S.Text>
        </Link>
        <Link href={"/"}>
          <S.Text>|</S.Text>
        </Link>
        <Link href={"/"}>
          <S.Text>#STYLE</S.Text>
        </Link>
        <Link href={"/"}>
          <S.Text>EVENT</S.Text>
        </Link>
        <Link href={"/"}>
          <S.Text>BEST</S.Text>
        </Link>
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
