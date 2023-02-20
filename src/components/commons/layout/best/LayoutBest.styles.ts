import styled from "@emotion/styled";

export const Best = styled.div`
  background-color: #f1f1f1;
  padding: 20px;
`;

export const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 600px;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const BestWrapper = styled.div`
  width: 100%;
  height: 600px;
`;

export const Title = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 100%;

  color: #000000;
`;

export const ItemContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ItemWrapper = styled.div`
  width: 300px;
  height: 450px;
  cursor: pointer;
`;

export const ItemImgWrapper = styled.div`
  width: 300px;
  height: 370px;
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

export const SearchWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f1f1f1;
  padding: 20px 42px;
`;

export const ButtonWrapper = styled.div``;

export const SubmitButton = styled.button`
  width: 170px;
  height: 60px;
  left: 97px;
  top: 1034px;

  background: #ffffff;
  border: 1px solid #000000;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  /* or 20px */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.05em;

  color: #000000;
  justify-content: center;
  cursor: pointer;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  padding: 20px 0;
  position: relative;
`;

export const SearchInput = styled.input`
  height: 30px;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #000000;
  background-color: #f1f1f1;

  :focus {
    outline: none;
  }
`;

export const GlassWrapper = styled.div`
  margin-top: 5px;

  cursor: pointer;
`;

export const GlassImg = styled.img`
  width: 17px;
  height: 17px;
  position: absolute;
  right: 5px;
  bottom: 18px;
`;
