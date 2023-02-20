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
  margin: 2px 0px 0px 56px;
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
`;

// 로그인 할 시, 보이는 UI

export const Info = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Name = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: #000000;
  padding-top: 2px;
`;

export const Nim = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #000000;
  padding-top: 2px;
`;

export const Point = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #000000;
  padding-top: 2px;
  margin-left: 5px;
  text-decoration: underline;
`;

export const P = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #000000;
  padding-top: 3px;
  margin-left: 3px;
`;

export const Logout = styled.div`
  margin-left: 56px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #000000;
  cursor: pointer;
  padding-top: 2px;
`;

export const ChargePoint = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #000000;
  padding-top: 2px;
  text-decoration: underline;
  margin-left: 30px;
`;
