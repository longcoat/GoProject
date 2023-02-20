import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 871px;
  background-color: #ffffff;
`;

export const LoginHeader = styled.div`
  width: 100%;
  height: 249px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LoginLine = styled.div`
  border: 1px solid #555555;
  margin: 0px 90px;
`;

export const LoginBody = styled.div`
  width: 100%;
  height: 622px;
  padding-top: 174px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const InfoWrapper = styled.div`
  padding-right: 30px;
`;

export const IdWrapper = styled.div`
  display: flex;
  flex-direction: row;

  padding-bottom: 24px;
`;

export const Id = styled.div`
  width: 113px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  /* or 24px */

  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
`;

export const IdInput = styled.input`
  width: 611px;
  height: 56px;
  background: #e9e9e9;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  /* or 15px */

  display: flex;
  align-items: center;

  color: #a9a9a9;
  border: 0;
  padding-left: 20px;
`;

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Password = styled.div`
  width: 113px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  /* or 24px */

  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
`;

export const PassInput = styled.input`
  width: 611px;
  height: 56px;
  background: #e9e9e9;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  /* or 15px */

  display: flex;
  align-items: center;

  color: #a9a9a9;
  border: 0;
  padding-left: 20px;
`;

export const LoginWrapper = styled.div`
  width: 186px;
  height: 136px;
`;

export const LoginButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  width: 186px;
  height: 136px;
  border: 0;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  cursor: pointer;
`;
