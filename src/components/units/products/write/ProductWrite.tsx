import * as S from "./ProductWrite.styles";

export default function ProductWrite() {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Title>상품등록</S.Title>
          <S.Line1></S.Line1>
          <S.ContentWrapper>
            <S.Label>상품명</S.Label>
            <S.Input placeholder="상품명을 작성해주세요" />
          </S.ContentWrapper>
          <S.Line2></S.Line2>
          <S.ContentWrapper>
            <S.Label>상품요약</S.Label>
            <S.Input placeholder="상품요약을 작성해주세요" />
          </S.ContentWrapper>
          <S.Line2></S.Line2>
          <S.ContentWrapper>
            <S.Label>상품내용</S.Label>
          </S.ContentWrapper>
          <S.Line2></S.Line2>
          <S.ContentWrapper>
            <S.Label>판매 가격</S.Label>
            <S.Input placeholder="판매 가격을 입력해주세요" />
          </S.ContentWrapper>
          <S.Line2></S.Line2>
          <S.ContentWrapper>
            <S.Label>태그입력</S.Label>
            <S.Input placeholder="#태그 #태그 #태그" />
          </S.ContentWrapper>
          <S.Line2></S.Line2>
          <S.MapWrapper>
            <S.Label>브랜드 위치</S.Label>
            <S.LocationWrapper>
              <S.Map>
                <S.MapImg src="/map.png" />
              </S.Map>
              <S.Location>
                <S.ZipcodeWrapper>
                  <S.ZipNumber placeholder="07250" />
                  <S.ZipSearch>우편번호 검색</S.ZipSearch>
                </S.ZipcodeWrapper>
                {/* <S.AddressWrapper> */}
                <S.AddressInput />
                <S.AddressInput />
                {/* </S.AddressWrapper> */}
              </S.Location>
            </S.LocationWrapper>
          </S.MapWrapper>
          <S.Line2></S.Line2>
          <S.ImgWrapper>
            <S.Label>사진 첨부</S.Label>
            <S.ImgUploadWrapper>
              <S.ImgContainer>
                <S.X>X</S.X>
                <S.Img src="/phoneimg.png" />
              </S.ImgContainer>
              <S.UploadWrapper>
                <S.ImgUpload>
                  <S.plus>+</S.plus>
                  <S.Upload>Upload</S.Upload>
                </S.ImgUpload>
              </S.UploadWrapper>
            </S.ImgUploadWrapper>
          </S.ImgWrapper>
          <S.Line1></S.Line1>
          <S.ButtonWrapper>
            <S.CancelButton>취소</S.CancelButton>
            <S.SubmitButton>등록</S.SubmitButton>
          </S.ButtonWrapper>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
