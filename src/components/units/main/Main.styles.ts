import styled from "@emotion/styled";

export const Main = styled.div`
  background-color: #f1f1f1;
  padding: 20px;
  height: 1000px;
  overflow: auto;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ItemWrapper = styled.div`
  width: 300px;
  height: 450px;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const ItemImgWrapper = styled.div`
  width: 300px;
  height: 370px;
  position: relative;
`;

export const ItemImg = styled.img`
  width: 300px;
  height: 370px;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  padding: 7px 15px;
`;

export const PriceSaleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Sale = styled.div`
  width: 20%;
  color: #f65656;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  /* identical to box height, or 20px */

  letter-spacing: -0.05em;
`;

export const Price = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  /* identical to box height, or 20px */

  letter-spacing: -0.05em;
  display: flex;
  align-items: center;

  color: #000000;
`;

export const Contents = styled.div``;

export const Company = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */

  letter-spacing: -0.05em;

  color: #555555;
  margin-bottom: 10px;
`;

export const Product = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  /* identical to box height, or 14px */

  display: flex;
  align-items: center;
  text-transform: capitalize;

  color: #555555;
`;

export const Line = styled.div`
  margin: 0 50px;
  border-top: 1px solid #555555;
`;

export const PickImg = styled.img`
  position: absolute;
  top: 20px;
  right: 16px;
`;
