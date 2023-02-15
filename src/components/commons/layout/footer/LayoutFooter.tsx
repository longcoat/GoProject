import * as S from "./LayoutFooter.styles";

export default function LayoutFooter() {
  return (
    <>
      <S.Footer>
        <S.LogoImg src="/DINGCOlogo1.png" />
        <S.ContentWrapper>
          <S.Text>
            <S.Company>(주)딩코</S.Company>
            <S.Boss>대표:안우엽</S.Boss>
          </S.Text>
          <S.Text>사업자등록번호 717-87-02373</S.Text>
          <S.Text>주소: 서울특별시 구로구 디지털로 300, 패스트파이브</S.Text>
          <S.Text>학원 등록 번호: 제 5845호</S.Text>
          <S.Text>
            <S.PrivatePolicy>개인정보 처리방침</S.PrivatePolicy>
            <S.ServicePolicy>서비스 이용 약관</S.ServicePolicy>
          </S.Text>
          <S.Text>Copyright © 2022. Dingco Corp., Ltd.</S.Text>
        </S.ContentWrapper>
      </S.Footer>
    </>
  );
}
