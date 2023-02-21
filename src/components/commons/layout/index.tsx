import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/stores";
import { useFetchUserLoggedIn } from "../hooks/queries/useFetchUserLoggedIn";
import LayoutBest from "./best/LayoutBest";
import LayoutCarousel from "./carousel/LayoutCarousel";
import LayoutFooter from "./footer/LayoutFooter";
import LayoutHeader from "./header/LayoutHeader";
import LayoutNavigation from "./navigation/LayoutNavigation";

interface ILayoutProps {
  children: JSX.Element;
}
const HIDDEN_INFOPAGE = ["/login", "/join"];

const HIDDEN_NAVIGATION = ["/login", "/join", "/new"];
const HIDDEN_MAINPAGE = ["/"];
const HIDDEN_BESTS = ["/"];
const HIDDEN_CAROUSEL = ["/"];
export default function Layout(props: ILayoutProps) {
  const [accessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  console.log(router.asPath);

  const isHiddenInfoPage = HIDDEN_INFOPAGE.includes(router.asPath);

  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
  const isHiddenMainPage = HIDDEN_MAINPAGE.includes(router.asPath);

  const isHiddenBest = HIDDEN_BESTS.includes(router.asPath);
  const isHiddenCarousel = HIDDEN_CAROUSEL.includes(router.asPath);

  const { data } = useFetchUserLoggedIn();
  const [userInfo, setInfoUser] = useRecoilState(userInfoState);
  useEffect(() => {
    setInfoUser({ ...data?.fetchUserLoggedIn });
  }, [data]);

  return (
    <>
      {!isHiddenInfoPage && <LayoutHeader />}
      {isHiddenNavigation && <LayoutNavigation />}
      {isHiddenMainPage && <LayoutNavigation />}
      {accessToken === "" || undefined ? (
        <>{isHiddenCarousel && <LayoutCarousel />}</>
      ) : (
        <>{isHiddenBest && <LayoutBest />}</>
      )}
      {/* {!isHiddenHeader && <LayoutBest />} */}
      <div>{props.children}</div>
      <LayoutFooter />
    </>
  );
}
