import { useRouter } from "next/router";
import * as S from "./Main.styles";
import InfiniteScroll from "react-infinite-scroller";
import { useRecoilState } from "recoil";
import { accessTokenState, globalSearch } from "../../../commons/stores/index";
import { useFetchUseditems } from "../../commons/hooks/queries/useFetchUseditems";

export default function Main() {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const [search] = useRecoilState(globalSearch);
  const { data, fetchMore } = useFetchUseditems();
  console.log(search, "MainSearch--------------------------");
  console.log(accessToken);

  console.log(accessToken, "token------");

  const onLoadMore = () => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditems.length / 8) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return { fetchUseditems: [...prev.fetchUseditems] };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickImage = (e) => {
    console.log("=====");
    console.log(e.currentTarget.id);
    console.log("=====");
    void router.push(`/${e.currentTarget.id}`);
  };

  return (
    <>
      <S.Line></S.Line>
      <S.Main>
        {accessToken === "" || undefined ? (
          <>
            <S.Container>
              {data?.fetchUseditems.slice(0, 8).map((el) => (
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
                      <S.Price>
                        {el.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </S.Price>
                    </S.PriceSaleWrapper>
                    <S.Contents>
                      <S.Company>{el.name}</S.Company>
                      <S.Product>{el.remarks}</S.Product>
                    </S.Contents>
                  </S.ContentsWrapper>
                </S.ItemWrapper>
              ))}
            </S.Container>
          </>
        ) : (
          <>
            <InfiniteScroll
              pageStart={0}
              loadMore={onLoadMore}
              hasMore={true}
              useWindow={false}
            >
              <S.Container>
                {data?.fetchUseditems.map((el) => (
                  <S.ItemWrapper
                    onClick={onClickImage}
                    id={el._id}
                    key={el._id}
                  >
                    <S.ItemImgWrapper>
                      {el.images[0] !== "" ? (
                        <S.ItemImg
                          id={el._id}
                          src={`https://storage.googleapis.com/${el.images[0]}`}
                        />
                      ) : (
                        <S.ItemImg src="/noImg.jpeg" />
                      )}
                      <S.PickImg src="/grayheart.png" />
                    </S.ItemImgWrapper>
                    <S.ContentsWrapper>
                      <S.PriceSaleWrapper>
                        <S.Sale>90%</S.Sale>
                        <S.Price>
                          {el.price
                            ?.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </S.Price>
                      </S.PriceSaleWrapper>
                      <S.Contents>
                        <S.Company>{el.name}</S.Company>
                        <S.Product>{el.remarks}</S.Product>
                      </S.Contents>
                    </S.ContentsWrapper>
                  </S.ItemWrapper>
                ))}
              </S.Container>
            </InfiniteScroll>
          </>
        )}
        {/* 메인 로그인유무로 분리 */}
      </S.Main>
    </>
  );
}
