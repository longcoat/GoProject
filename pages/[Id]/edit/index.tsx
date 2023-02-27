import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../src/commons/types/generated/types";
import ProductWrite from "../../../src/components/units/products/write/ProductWrite";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      createdAt
      useditemAddress {
        zipcode
        address
        addressDetail
        lng
        lat
      }
      seller {
        _id
        name
        picture
        email
      }
      soldAt
    }
  }
`;

export default function EditPage() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.Id),
    },
  });
  return (
    <>
      <ProductWrite
        isEdit={true}
        data={data}
        useditemId={String(router.query.Id)}
      />
    </>
  );
}
