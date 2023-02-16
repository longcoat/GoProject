import LayoutBest from "./best/LayoutBest";
import LayoutCarousel from "./carousel/LayoutCarousel";
import LayoutFooter from "./footer/LayoutFooter";
import LayoutHeader from "./header/LayoutHeader";
import LayoutNavigation from "./navigation/LayoutNavigation";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutHeader />
      <LayoutNavigation />
      <LayoutBest />
      <div>{props.children}</div>
      <LayoutFooter />
    </>
  );
}
