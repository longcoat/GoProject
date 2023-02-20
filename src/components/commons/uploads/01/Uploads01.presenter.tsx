import * as S from "../../../units/products/write/ProductWrite.styles

export default function Upload01UI(props) {
  return (
    <>
      {props.fileUrl ? (
        <S.LoadImg
          onClick={props.onClickImage}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.UploadButton type="button" onClick={props.onClickImage}>
          +<br /> Upload
        </S.UploadButton>
      )}
      <input
        type="file"
        style={{ display: "none" }}
        ref={props.fileRef}
        onChange={props.onChangeImage}
      />
    </>
  );
}
