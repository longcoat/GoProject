import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/stores";
import { useDeleteUseditemQuestion } from "../../../commons/hooks/mutations/useDeleteUseditemQuestion";
import { useFetchUseditemQuestions } from "../../../commons/hooks/queries/useFetchUseditemQuestions";
import CommentEdit from "../edit/Comment.Edit";
import RecommentWrite from "../recomment/RecommentWrite";
import ReCommentDetail from "../recommentdetail/RecommentDetail";
import { ICommentDetailProps } from "./Comment.Detail.types";
import * as S from "./CommentDetail.styles";

export default function CommentDetail(props: ICommentDetailProps) {
  const [userInfo] = useRecoilState(userInfoState);
  const { data, fetchMore } = useFetchUseditemQuestions(props?.useditemId);
  const { onClickDeleteItemQuestion } = useDeleteUseditemQuestion();
  const [isUpdateId, setIsUpdateId] = useState("");
  const [recommentOpen, setRecommentOpen] = useState("");
  const [openWrite, setOpenWrite] = useState(false);

  const onLoadMore = () => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Number(Math.ceil(data.fetchUseditemQuestions.length / 10) + 1),
      },
      updateQuery(prev, { fetchMoreResult }) {
        if (fetchMoreResult.fetchUseditemQuestions === undefined) {
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };
        }
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  const onClickUpdateComment = (updateId: string) => () => {
    setIsUpdateId(updateId);
  };

  const onClickRecomment = (data: any) => () => {
    console.log(data);
    setRecommentOpen(data);
  };

  console.log(data?.fetchUseditemQuestions[0], "-----datael");

  console.log(userInfo, "----userInfo");
  return (
    <>
      <div>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          <>
            {data?.fetchUseditemQuestions ? (
              <>
                {data?.fetchUseditemQuestions?.map((el, index) => (
                  <S.Reply1 key={el._id}>
                    {isUpdateId !== el._id ? (
                      <>
                        <S.TopWrapper>
                          <S.Reply>
                            <S.NameWrapper>
                              <S.Name>{el?.user?.name}</S.Name>
                            </S.NameWrapper>
                            <S.ReplyTitleWrapper>
                              <S.ReplyTitle>{el.contents}</S.ReplyTitle>
                            </S.ReplyTitleWrapper>
                            <S.ItemWrapper>
                              <S.Date>{el?.createdAt?.slice(0, 10)}</S.Date>
                              {userInfo._id ===
                                data?.fetchUseditemQuestions[index].user
                                  ._id && (
                                <>
                                  <S.ModifyWrapper
                                    type="button"
                                    onClick={onClickUpdateComment(el._id)}
                                  >
                                    <S.Modify src="/pencil.png" />
                                  </S.ModifyWrapper>
                                  <S.DeleteWrapper
                                    type="button"
                                    onClick={onClickDeleteItemQuestion(el._id)}
                                  >
                                    <S.Delete src="/delete.png" />
                                  </S.DeleteWrapper>
                                </>
                              )}
                              {userInfo._id !==
                                data?.fetchUseditemQuestions[index].user
                                  ._id && (
                                <>
                                  <S.AnswerImgWrapper
                                    onClick={() => {
                                      setOpenWrite((prev) => !prev);
                                    }}
                                  >
                                    <S.AnswerImg src="answer.png" />
                                  </S.AnswerImgWrapper>
                                </>
                              )}
                            </S.ItemWrapper>
                          </S.Reply>
                          {openWrite && (
                            <RecommentWrite
                              QuestionId={el._id}
                              onClickRecomment={onClickRecomment}
                              setRecommentOpen={setRecommentOpen}
                            />
                          )}
                        </S.TopWrapper>
                        <S.BottomWrapper>
                          <ReCommentDetail QuestionId={el._id} />
                          {recommentOpen ===
                          data?.fetchUseditemQuestions[index]._id ? (
                            <>
                              <div>
                                <RecommentWrite
                                  QuestionAnswerId={
                                    data?.fetchUseditemQuestions[index]._id
                                  }
                                  QustionId={el._id}
                                  onClickRecomment={onClickRecomment}
                                  setRecommentOpen={setRecommentOpen}
                                />
                              </div>
                            </>
                          ) : (
                            <></>
                          )}
                        </S.BottomWrapper>
                      </>
                    ) : (
                      <>
                        <CommentEdit
                          defaultValue={el.contents}
                          useditemQuestionId={isUpdateId}
                          onClickUpdateComment={onClickUpdateComment}
                          setIsUpdateId={setIsUpdateId}
                        />
                      </>
                    )}
                  </S.Reply1>
                ))}
              </>
            ) : (
              <></>
            )}
          </>
        </InfiniteScroll>
      </div>
    </>
  );
}
