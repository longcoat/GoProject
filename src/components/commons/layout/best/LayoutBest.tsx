import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  type IQuery,
  type IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import * as S from "./LayoutBest.styles";
export const FETCH_USED_ITEMS = gql`
  query ($page: Int) {
    fetchUseditems(page: $page) {
      _id
      name
      price
      images
      createdAt
      remarks
    }
  }
`;

export default function LayoutBest() {
  const router = useRouter();

  console.log(router);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  console.log(data?.fetchUseditems);

  const onClickImage = (e) => {
    console.log("=====");
    console.log(e.currentTarget.id);
    console.log("=====");
    void router.push(`/${e.currentTarget.id}`);
  };

  return (
    <>
      <S.Container>
        <S.BestWrapper>
          <S.Title>BEST</S.Title>
          <S.ItemContainer>
            {/* 아이템하나 */}
            {data?.fetchUseditems.slice(0, 4).map((el) => (
              <S.ItemWrapper onClick={onClickImage} id={el._id} key={el._id}>
                <S.ItemImgWrapper>
                  {el.images[0] !== "" ? (
                    <S.ItemImg
                      id={el._id}
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                    />
                  ) : (
                    <S.ItemImg src="/noImg.jpeg" />
                  )}
                </S.ItemImgWrapper>
                <S.ContentsWrapper>
                  <S.PriceSaleWrapper>
                    <S.Sale>90%</S.Sale>
                    <S.Price>{el.price}</S.Price>
                  </S.PriceSaleWrapper>
                  <S.Contents>
                    <S.Company>{el.name}</S.Company>
                    <S.Product>{el.remarks}</S.Product>
                  </S.Contents>
                </S.ContentsWrapper>
              </S.ItemWrapper>
            ))}

            {/* 아이템하나 */}
          </S.ItemContainer>
        </S.BestWrapper>
      </S.Container>
    </>
  );
}
