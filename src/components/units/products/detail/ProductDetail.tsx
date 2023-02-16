import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  type IQuery,
  type IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

import * as S from "./ProductDetail.styles";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      tags
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      pickedCount
      seller {
        _id
        email
        name
      }
    }
  }
`;

export default function ProductDetail() {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: "63ede45bf786be002931a8fb",
    },
  });

  console.log("2727272727");
  console.log(data);
  console.log("==============");

  return (
    <>
      <S.Container>
        <S.Header>
          <S.ImgWrapper>
            <S.Img
              src={`https://storage.googleapis.com/${data?.fetchUseditem[0]?.images}`}
            />
          </S.ImgWrapper>
          <S.ProductWrapper>
            <S.ProductInfo>
              <S.SubTitle>AVANDRESS</S.SubTitle>
              <S.Title>[SET] HERO TRACK WIDE SET-UP PURPLE</S.Title>
            </S.ProductInfo>
            <S.PricePickWrapper>
              <S.PriceWrapper>
                <S.Label>판매가</S.Label>
                <S.Price>1,533,900</S.Price>
                <S.Won>원</S.Won>
              </S.PriceWrapper>
              <S.PickWrapper>
                <S.My>MY</S.My>
                <S.HeartImg src="/grayheart.png" />
                <S.Product>Product</S.Product>
              </S.PickWrapper>
            </S.PricePickWrapper>
            <S.Line1></S.Line1>
            <S.ProductContent>
              <S.Content>
                폴리에스테르 100% 원사로 스퀘어미터 450 밀도있게 편직하여
                중량감과 두께를 트레이닝복에 최적화시켰으며 덤블텐타가공으로
                축율 및 뒤틀림을 최소화 하였습니다. 수분을 빠르게 흡수하고
                건조되도록 하였고 내마모성이 좋습니다. 기계세탁이 가능하며 세탁
                후 빠르게 건조되어 관리가 용이합니다. 편직 가공에서 유연제
                처리로 부드러운 터치감으로 편안합니다.
              </S.Content>
              <S.TagWrapper>
                <S.Tag>#트랙자켓</S.Tag>
                <S.Tag>#아우터</S.Tag>
                <S.Tag>#자켓</S.Tag>
              </S.TagWrapper>
            </S.ProductContent>
            <S.Line2></S.Line2>
            <S.ButtonWrapper>
              <S.BuyButton>BUY NOW</S.BuyButton>
              <S.Basket>SHOPPING BAG</S.Basket>
            </S.ButtonWrapper>
          </S.ProductWrapper>
        </S.Header>
        <S.Detail>Detail</S.Detail>
        <S.Line3></S.Line3>
        <S.Body>
          <S.Caution>배송/교환/반품/AS 관련 유의사항</S.Caution>
          <S.Caution1>
            상품상세설명에 배송/교환/반품/취소 관련 안내가 기재된 경우 다음
            안내사항보다 우선 적용됩니다.
          </S.Caution1>
          <S.MapWrapper>
            <S.Map src="/map1.png" />
          </S.MapWrapper>
          <S.ContentWrapper>
            <S.List>
              상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이
              달라집니다.{" "}
            </S.List>
            <S.List>
              상품의 배송비는 공급업체의 정책에 따라 다르오며 공휴일 및 휴일은
              배송이 불가합니다.{" "}
            </S.List>
            <S.List>
              상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환/반품
              택배비 고객부담으로 왕복택배비가 발생합니다. (전자상거래 등에서의
              소비자보호에 관한 법률 제18조(청약 철회 등) 9항에 의거 소비자의
              사정에 의한 청약 철회 시 택배비는 소비자 부담입니다.){" "}
            </S.List>
            <S.List>
              주문완료 후 재고 부족 등으로 인해 주문 취소 처리가 될 수도 있는 점
              양해 부탁드립니다.{" "}
            </S.List>
            <S.List>
              반품/교환은 미사용 제품에 한해 배송완료 후 7일 이내에 접수하여
              주십시오.{" "}
            </S.List>
            <S.List>
              제품을 사용 또는 훼손한 경우, 사은품 누락, 상품 TAG 보증서, 상품
              부자재가 제거 혹은 분실된 경우, 밀봉포장을 개봉했거나 내부
              포장재를 훼손 또는 분실한 경우(단, 제품확인을 위한 개봉 제외)
              반품/교환이 불가합니다.{" "}
            </S.List>
            <S.List>
              {" "}
              A/S 기준이나 가능여부는 브랜드와 상품에 따라 다르므로 관련 문의는
              에이블리 고객센터를 통해 부탁드립니다.{" "}
            </S.List>
            <S.List>
              상품불량에 의한 반품,교환, A/S, 환불, 품질보증 및 피해보상 등에
              관한 사항은 소비자분쟁해결기준(공정거래위원회 고시)에 따라 받으실
              수 있습니다.
            </S.List>
          </S.ContentWrapper>
        </S.Body>
        <S.Detail>Q & A</S.Detail>
        <S.Line3></S.Line3>
        <S.Footer>
          <S.QuestionWrapper>
            <S.QuestionInput placeholder="내용을 입력해 주세요." />
          </S.QuestionWrapper>
          <S.WriteButtonWrapper>
            <S.WriteButton>작성하기</S.WriteButton>
          </S.WriteButtonWrapper>
          {/* 본인이 본인 댓글 볼 때  댓글뷰 */}
          <S.Line4></S.Line4>
          <S.ReplyWrapper>
            <S.NameWrapper>
              <S.Name>노은정</S.Name>
            </S.NameWrapper>
            <S.ReplyContainer>
              <S.Reply>
                <S.ReplyTitleWrapper>
                  <S.ReplyTitle>주현님 소개팅 착장 질문이요</S.ReplyTitle>
                </S.ReplyTitleWrapper>
                <S.ItemWrapper>
                  <S.Date>2203.03.30</S.Date>
                  <S.ModifyWrapper>
                    <S.Modify src="/pencil.png" />
                  </S.ModifyWrapper>
                  <S.DeleteWrapper>
                    <S.Delete src="/delete.png" />
                  </S.DeleteWrapper>
                </S.ItemWrapper>
              </S.Reply>
              <S.AnswerWrapper>
                <S.Answer>답변</S.Answer>
                <S.Date1>2023.03.31</S.Date1>
                <S.AnswerContents>
                  <div>
                    안녕하세요, 고객님! 저희 제품에 관심 가져주셔서
                    감사드립니다.
                  </div>
                  <div>현재 더 큰 사이즈 상품은 없습니다. </div>
                  <div>궁금하신 사항은 언제든지 문의 부탁드립니다.</div>
                  <div>감사합니다.</div>
                </S.AnswerContents>
              </S.AnswerWrapper>
            </S.ReplyContainer>
          </S.ReplyWrapper>
          {/* 남들이 본인 볼 때 댓글뷰 */}
          <S.ReplyWrapper>
            <S.NameWrapper>
              <S.Name>노은정</S.Name>
            </S.NameWrapper>
            <S.ReplyContainer>
              <S.Reply>
                <S.ReplyTitleWrapper>
                  <S.ReplyTitle>주현님 소개팅 룩 ...</S.ReplyTitle>
                </S.ReplyTitleWrapper>
                <S.ItemWrapper>
                  <S.Date>2203.03.30</S.Date>
                  <S.AnswerImgWrapper>
                    <S.AnswerImg src="answer.png" />
                  </S.AnswerImgWrapper>
                </S.ItemWrapper>
              </S.Reply>
              <S.AnswerWrapper>
                <S.Answer>답변</S.Answer>
                <S.Date1>2023.03.31</S.Date1>
                <S.AnswerContents>
                  <div>
                    안녕하세요, 고객님! 저희 제품에 관심 가져주셔서
                    감사드립니다.
                  </div>
                  <div>현재 더 큰 사이즈 상품은 없습니다. </div>
                  <div>궁금하신 사항은 언제든지 문의 부탁드립니다.</div>
                  <div>감사합니다.</div>
                </S.AnswerContents>
              </S.AnswerWrapper>
            </S.ReplyContainer>
          </S.ReplyWrapper>
          {/* 댓글에 답글을 남길 때 */}
          <S.ReplyWrapper>
            <S.NameWrapper>
              <S.Name>노은정</S.Name>
            </S.NameWrapper>
            <S.ReplyContainer>
              <S.Reply>
                <S.ReplyTitleWrapper>
                  <S.ReplyTitle>아이고 진짜 박광민 잘 좀하자</S.ReplyTitle>
                </S.ReplyTitleWrapper>
                <S.ItemWrapper>
                  <S.Date>2203.03.30</S.Date>
                  <S.AnswerImgWrapper>
                    <S.AnswerImg src="answer.png" />
                  </S.AnswerImgWrapper>
                </S.ItemWrapper>
              </S.Reply>
              <S.AnswerWrapper>
                <S.AnswerContents>
                  <S.QuestionInput1 placeholder="내용을 입력해 주세요." />
                </S.AnswerContents>
                <S.WriteButtonWrapper1>
                  <S.WriteButton1>취소하기</S.WriteButton1>
                  <S.WriteButton2>작성하기</S.WriteButton2>
                </S.WriteButtonWrapper1>
              </S.AnswerWrapper>
            </S.ReplyContainer>
          </S.ReplyWrapper>
        </S.Footer>
      </S.Container>
    </>
  );
}
