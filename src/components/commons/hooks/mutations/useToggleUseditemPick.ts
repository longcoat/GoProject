import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationToggleUseditemPickArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM } from "../queries/useFetchUseditem";

const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export const useToggleUseditemPick = () => {
  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USED_ITEM_PICK);

  const onClickTogglePick = (useditemId) => async (event) => {
    try {
      const result = await toggleUseditemPick({
        variables: {
          useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: {
              useditemId,
            },
          },
        ],
      });
      console.log(result, "toggleResult-----");
      if (!!result.data?.toggleUseditemPick) {
        Modal.success({ content: "찜하기 성공하셨습니다." });
      } else {
        Modal.error({ content: "찜하기 취소하셨습니다." });
      }
      const likeList = useditemId;
      const likeLists = JSON.parse(localStorage.getItem("likeLists") ?? "[]");
      if (!likeLists.includes(likeList)) {
        likeLists.push(likeList);
      } else {
        const toggleIndex = likeLists.indexOf(likeList);
        likeLists.splice(toggleIndex, 1);
      }
      localStorage.setItem("likeLists", JSON.stringify(likeLists));
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    onClickTogglePick,
  };
};
