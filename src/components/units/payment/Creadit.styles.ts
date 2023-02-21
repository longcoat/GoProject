import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { SmallBtn } from "../../../commons/styles/commonStyles";

interface IIsSelectLists {
  isSelectLists: boolean;
}

export const CraditModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 20px;
  }
`;
export const CreaditWrap = styled.div`
  padding: 52px 16px 16px;
`;
export const CreaditTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
`;
export const CreaditSelectWrap = styled.div`
  > div > button {
    position: relative;
    padding: 16px;
    width: 100%;
    display: block;
    background-color: #ffffff;
    border: none;
    border-bottom: 2px solid #000000;
    ::after {
      content: "";
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%) rotate(135deg);
      width: 12px;
      height: 12px;
      border-width: 2px 2px 0 0;
      border-style: solid;
      border-color: #000000;
    }
  }
  > ul {
    height: ${(props: IIsSelectLists) => (props.isSelectLists ? "230px" : "0")};
    transition: all 0.2s;
    overflow: hidden;
    margin-top: 16px;
    padding-left: 0;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    > li + li {
      border-top: 1px solid #e9e9e9;
    }
    > li > button {
      padding: 16px;
      width: 100%;
      display: block;
      background-color: #ffffff;
      border: none;
      color: #e0e0e0;
      :hover {
        font-weight: 700;
        color: #000000;
      }
    }
  }
`;
export const CreaditBtn = styled.button`
  padding: 14px 16px;
  border-width: 1px;
  border-style: solid;
  border-color: #bdbdbd;
  // transition: all 0.2s;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  background-color: #000000;
  color: #ffffff;
  :disabled {
    background-color: #bdbdbd;
    color: #ffffff;
    border: 1px solid #bdbdbd;
  }
`;
