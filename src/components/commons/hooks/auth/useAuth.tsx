import { ExclamationCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface IErrorModalProps {
  text: string;
}

// eslint-disable-next-line react/display-name
export const useAuth = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ErrorModal = (props: IErrorModalProps) => {
    return (
      <>
        <ModalWrap
          open={isOpen}
          footer={null}
          centered={true}
          onCancel={() => {
            setIsOpen(false);
            void router.push("/login");
          }}
          // onOk={handleOk}
          // onCancel={handleCancel}
        >
          <TextWrap>
            <IconWrap>
              <ExclamationCircleOutlined />
            </IconWrap>
            <Text>{props.text}</Text>
          </TextWrap>
        </ModalWrap>
      </>
    );
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      setIsOpen(true);
    }
  }, []);

  return {
    ErrorModal,
  };
};

const ModalWrap = styled(Modal)`
  .ant-modal-content {
    border-radius: 20px;
  }
`;

const TextWrap = styled.div`
  padding: 74px 108px 96px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const IconWrap = styled.div`
  color: #ff0000;
  font-size: 30px;
`;
const Text = styled.div`
  width: 200px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  word-break: keep-all;
`;
