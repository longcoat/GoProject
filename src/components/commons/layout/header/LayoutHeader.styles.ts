import styled from "@emotion/styled";

export const Header = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  padding: 25px 0px 25px 75px;
`;

export const LogoImg = styled.img`
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 60px;
`;

export const Text = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #000000;
  cursor: pointer;
  margin: 4px 0px 0px 56px;
`;

export const CountWrapper = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
`;

export const CountImg = styled.img``;

export const CountNumber = styled.p`
  position: absolute;
  top: 2px;
  left: 5px;
`;
