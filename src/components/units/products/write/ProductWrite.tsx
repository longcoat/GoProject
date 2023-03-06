import * as S from "./ProductWrite.styles";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useAuth } from "../../../commons/hooks/auth/useAuth";
import { useForm } from "react-hook-form";
import { IProductWriteProps, IUseItemFormData } from "./ProductWrite.types";
import { Modal } from "antd";
import { useCreateUsedItem } from "../../../commons/hooks/mutations/useCreateUsedItem";
import { useEffect, useState } from "react";
import { useUpdateUsedItem } from "../../../commons/hooks/mutations/useUpdateUsedItem";
import Uploads01 from "../../../commons/uploads/01/Upload01.index";
import { useUploadFile } from "../../../commons/hooks/mutations/useUploadFile";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import { makeMap } from "../../../commons/map/map";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
declare const window: typeof globalThis & {
  kakao: any;
};
export default function ProductWrite(props: IProductWriteProps) {
  console.log(props, "props-----");

  useAuth();
  const router = useRouter();
  const [files, setFiles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { createSubmit } = useCreateUsedItem();
  const { updateSubmit } = useUpdateUsedItem();
  const { uploadFile } = useUploadFile();

  const { register, setValue, reset, handleSubmit } = useForm({
    // resolver: yupResolver(ProductItemSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      remarks: "",
      contents: "",
      price: "",
      tags: [""],
      images: ["", ""],
      useditemAddress: {
        zipcode: "",
        address: "",
        addressDetail: "",
      },
    },
  });

  useEffect(() => {
    console.log(props.data, "props.data------write");
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?&libraries=services&autoload=false&appkey=59ed8dad5d71145e99338d9b82780395";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        makeMap(props.data?.fetchUseditem?.useditemAddress?.address);
      });
    };

    if (props.data) {
      const resetData = {
        name: props.data?.fetchUseditem?.name,
        remarks: props.data?.fetchUseditem?.remarks,
        contents: props.data?.fetchUseditem?.contents,
        price: props.data?.fetchUseditem?.price,
        tags: [...props.data?.fetchUseditem.tags],
        images: [...props.data?.fetchUseditem.images],
        useditemAddress: {
          zipcode: props.data?.fetchUseditem?.useditemAddress?.zipcode,
          address: props.data?.fetchUseditem?.useditemAddress?.address,
          addressDetail:
            props.data?.fetchUseditem?.useditemAddress?.addressDetail,
        },
      };
      reset({ ...resetData });
    }
  }, [props.data]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ align: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, "link"],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
        { background: [] },
      ],
      ["image", "video"],
      ["clean"],
    ],
  };

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
  };

  const onChangeFileUrls = (fileUrl: File, index: number) => {
    const newFileUrls = [...files];
    newFileUrls[index] = fileUrl;
    setFiles(newFileUrls);
  };

  const onClickMainGo = () => {
    void router.push("/");
  };

  const onClickSubmit = async (data: IUseItemFormData) => {
    const results = await Promise.all(
      files.map(async (file) => await uploadFile({ variables: { file } }))
    );
    const resultUrls = results.map((el) =>
      el !== undefined ? el.data?.uploadFile.url : ""
    );
    console.log(results, resultUrls, "resultUrls-----");
    setValue("images", resultUrls);
    if (!props.isEdit) {
      void createSubmit(data, resultUrls);
      Modal.success({ content: "상품등록이 완료되었습니다." });
    } else {
      void updateSubmit(props.useditemId, data, resultUrls);
      Modal.success({ content: "상품수정이 완료되었습니다." });
    }
  };

  // Daum-postcode

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const handleComplete = (data: Address) => {
    console.log(data, "address------");
    onToggleModal();
    setValue("useditemAddress.address", data.address);
    setValue("useditemAddress.zipcode", data.zonecode);
    makeMap(data?.address);
  };

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Title>{props.isEdit ? "상품수정" : "상품등록"}</S.Title>
          <form onSubmit={handleSubmit(onClickSubmit)}>
            <S.Line1></S.Line1>
            <S.ContentWrapper>
              <S.Label>상품명</S.Label>
              <S.Input
                placeholder="상품명을 작성해주세요"
                {...register("name")}
              />
            </S.ContentWrapper>
            <S.Line2></S.Line2>
            <S.ContentWrapper>
              <S.Label>상품요약</S.Label>
              <S.Input
                placeholder="상품요약을 작성해주세요"
                {...register("remarks")}
              />
            </S.ContentWrapper>
            <S.Line2></S.Line2>
            <S.ContentWrapper>
              <S.Label>상품내용</S.Label>
              <ReactQuill
                defaultValue={props.data?.fetchUseditem.contents}
                onChange={onChangeContents}
                style={{
                  width: "1250px",
                  height: "400px",
                  marginBottom: "42px",
                }}
                className="aaa"
                modules={modules}
                placeholder="상품을 설명해주세요"
              />
            </S.ContentWrapper>
            <S.Line2></S.Line2>
            <S.ContentWrapper>
              <S.Label>판매 가격</S.Label>
              <S.Input
                placeholder="판매 가격을 입력해주세요"
                {...register("price")}
              />
            </S.ContentWrapper>
            <S.Line2></S.Line2>
            <S.ContentWrapper>
              <S.Label>태그입력</S.Label>
              <S.Input placeholder="#태그 #태그 #태그" {...register("tags")} />
            </S.ContentWrapper>
            <S.Line2></S.Line2>
            <S.MapWrapper>
              <S.Label>브랜드 위치</S.Label>
              <S.LocationWrapper>
                <div>
                  <S.Map id="map" />
                </div>
                <S.Location>
                  <S.ZipcodeWrapper>
                    <S.ZipNumber
                      placeholder="07250"
                      {...register("useditemAddress.zipcode")}
                      readOnly
                    />
                    <S.ZipSearch type="button" onClick={onToggleModal}>
                      우편번호 검색
                    </S.ZipSearch>
                    {isOpen && (
                      <Modal
                        open={true}
                        onOk={onToggleModal}
                        onCancel={onToggleModal}
                      >
                        <DaumPostcodeEmbed onComplete={handleComplete} />
                      </Modal>
                    )}
                  </S.ZipcodeWrapper>
                  <S.AddressInput
                    placeholder=""
                    {...register("useditemAddress.address")}
                    readOnly
                  />
                  <S.AddressInput
                    placeholder=""
                    {...register("useditemAddress.addressDetail")}
                  />
                </S.Location>
              </S.LocationWrapper>
            </S.MapWrapper>
            <S.Line2></S.Line2>
            <S.ImgWrapper>
              <S.Label>사진 첨부</S.Label>
              <Uploads01
                defaultUrls={props.data?.fetchUseditem?.images}
                onChangeFileUrls={onChangeFileUrls}
              />
              {/* <S.ImgUploadWrapper>
                <S.UploadWrapper>
                  <S.ImgUpload>
                    <S.plus>+</S.plus>
                    <S.Upload>Upload</S.Upload>
                  </S.ImgUpload>
                </S.UploadWrapper>
              </S.ImgUploadWrapper> */}
            </S.ImgWrapper>
            <S.Line1></S.Line1>
            <S.ButtonWrapper>
              <S.CancelButton type="button" onClick={onClickMainGo}>
                취소
              </S.CancelButton>
              <S.SubmitButton>{props.isEdit ? "수정" : "등록"}</S.SubmitButton>
            </S.ButtonWrapper>
          </form>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
