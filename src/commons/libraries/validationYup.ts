import * as yup from "yup";

export const JoinSchema = yup.object({
  name: yup.string().required("이름을 입력해주세요."),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "이메일 아이디를 @까지 정확하게 입력하세요."
    )
    .required("아이디를 입력해주세요."),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,16}$/,
      "비밀번호는 영문, 숫자 조합 8~16자리를 입력해주세요."
    )
    .required("비밀번호를 입력해주세요."),
});

export const LoginSchema = yup.object({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "이메일 아이디를 @까지 정확하게 입력해주세요."
    )
    .required("아이디를 입력해주세요."),
  password: yup
    .string()
    // .matches(
    //   /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,16}$/,
    //   "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."
    // )
    .required("비밀번호를 입력해주세요."),
});
