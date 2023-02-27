import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  height: auto;
  padding: 104px 90px 104px 90px;
  margin: 0 auto;
`;

export const Wrapper = styled.div``;

export const Title = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 100%;
  /* identical to box height, or 40px */

  display: flex;
  align-items: center;
  letter-spacing: -0.05em;

  color: #000000;
  padding-bottom: 30px;
  padding-left: 30px;
`;

export const Line1 = styled.div`
  border: 1px solid #555555;
`;

export const Line2 = styled.div`
  border: 1px solid #999999;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 34px 20px 34px 0px;
`;

export const Label = styled.div`
  width: 300px;
  padding-left: 30px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  /* or 24px */

  display: flex;
  align-items: center;
  letter-spacing: -0.05em;

  color: #000000;
`;

export const Input = styled.input`
  background-color: #e9e9e9;
  width: 100%;

  height: 56px;
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

export const MapWrapper = styled.div`
  padding: 34px 0px;
  width: 100%;
`;

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 34px 0px 0px 30px;
`;

export const Map = styled.div``;

export const MapImg = styled.img``;

export const Location = styled.div`
  margin: 20px 0px 0px 26px;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ZipNumber = styled.input`
  width: 77px;
  height: 52px;
  background: #ffffff;
  /* Gray 4 */

  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
`;

export const ZipSearch = styled.button`
  margin-left: 16px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;

  /* White */

  color: #ffffff;
  width: 124px;
  height: 51px;
  background-color: #000000;
  border: 0;
  cursor: pointer;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddressInput = styled.input`
  background: #e9e9e9;
  height: 56px;
  border: 0;
  margin-top: 25px;
  width: 791px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  color: #a9a9a9;
  padding-left: 20px;
`;

export const ImgWrapper = styled.div`
  padding: 34px 0px;
`;

export const ImgUploadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 34px;
  margin-left: 30px;
`;

export const ImgContainer = styled.div`
  width: 180px;
  height: 180px;
  padding: 20px;
  position: relative;
`;

export const X = styled.p`
  position: absolute;
  top: 3px;
  right: 3px;
`;

export const Img = styled.img`
  width: 140px;
  height: 140px;
`;

export const UploadWrapper = styled.div`
  width: 180px;
  height: 180px;
  margin-left: 24px;
`;

export const ImgUpload = styled.button`
  width: 180px;
  height: 180px;
  cursor: pointer;
  background-color: #bdbdbd;
  border: 0;
`;

export const plus = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #4f4f4f;
`;

export const Upload = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #4f4f4f;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 73px;
`;

export const CancelButton = styled.button`
  width: 195px;
  height: 77px;
  left: 768px;
  top: 2119px;

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
  justify-content: center;

  color: #000000;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 195px;
  height: 77px;
  left: 979px;
  top: 2119px;
  margin-left: 16px;

  background: #000000;

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
  justify-content: center;

  color: #ffffff;
  border: 0;
  cursor: pointer;
`;
