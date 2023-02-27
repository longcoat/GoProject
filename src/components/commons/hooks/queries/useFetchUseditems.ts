import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int) {
    fetchUseditems(page: $page) {
      _id
      images
      name
      remarks
      price
      tags
      createdAt
      useditemAddress {
        address
        addressDetail
        zipcode
      }
    }
  }
`;

export const useFetchUseditems = () => {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: {
      page: 1,
    },
  });

  return {
    data,
    fetchMore,
  };
};
