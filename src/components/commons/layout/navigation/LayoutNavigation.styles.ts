import styled from "@emotion/styled";

export const Navigation = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100px;
  background-color: #000000;
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 0px 150px;
`;

export const Text = styled.div`
  color: #ffffff;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 100%;
  /* identical to box height, or 22px */

  letter-spacing: -0.05em;
  cursor: pointer;
`;

export const CountWrapper = styled.div`
  width: 17px;
  height: 17px;
  position: relative;
`;

export const CountImg = styled.img`
  width: 17px;
  height: 17px;
`;

export const CountNumber = styled.p`
  position: absolute;
  top: 0px;
  left: 3.5px;
  color: red;
`;

export const LoginPage = styled.div`
  display: flex;
  width: 230px;
`;

export const SubText = styled.div`
  font-family: "Roboto";
  width: 120px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #ffffff;
  cursor: pointer;
  margin: 2px 0px 0px 56px;
`;
