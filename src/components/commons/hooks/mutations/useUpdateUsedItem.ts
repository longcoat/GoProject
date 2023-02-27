import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationUpdateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM } from "../queries/useFetchUseditem";

const CREATE_USED_ITEM = gql`
  mutation updateUseditem(
    $useditemId: ID!
    $updateUseditemInput: UpdateUseditemInput!
  ) {
    updateUseditem(
      useditemId: $useditemId
      updateUseditemInput: $updateUseditemInput
    ) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      useditemAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export const useUpdateUsedItem = () => {
  const router = useRouter();
  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(CREATE_USED_ITEM);

  const updateSubmit = async (useditemId, data, resultUrls) => {
    try {
      const result = await updateUseditem({
        variables: {
          useditemId,
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: String(data.contents),
            price: parseInt(data.price),
            tags: data.tags,
            images: resultUrls,
            useditemAddress: {
              zipcode: data.useditemAddress.zipcode,
              address: data.useditemAddress.address,
              addressDetail: data.useditemAddress.addressDetail,
            },
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: String(useditemId) },
          },
        ],
      });
      // console.log(result.data);
      void router.push(`/${useditemId}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    updateSubmit,
  };
};
