import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import * as S from "./LayoutCarousel.styles";

export default function LayoutCarousel() {
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <S.Carousel>
        <Slider {...setting}>
          <S.BoxWrapper>
            <S.Box1 src="/flo1.jpg" width="1920px" />
          </S.BoxWrapper>
          <S.BoxWrapper>
            <S.Box1 src="/flo2.jpg" width="1920px" />
          </S.BoxWrapper>
        </Slider>
      </S.Carousel>
      <S.NewArrival>New Arrival</S.NewArrival>
    </>
  );
}
