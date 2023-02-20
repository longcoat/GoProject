import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { checkValidationFile } from "../../../../commons/libraries/validationFile";
import Upload01UI from "./Uploads01.presenter";

export const UPLOAD_FILE = gql`
  mutation ($file: Upload!) {
    uploadFile(file: $file) {
      _id
      url
    }
  }
`;

export default function Upload01(props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  //   const [image, setImage] = useState("");

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });

      console.log(result);
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <Upload01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      onClickImage={onClickImage}
      onChangeImage={onChangeImage}
    />
  );
}
