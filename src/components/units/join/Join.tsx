import { useForm } from "react-hook-form";
import { useCreateUser } from "../../commons/hooks/mutations/useCreateUser";
import * as S from "./Join.styles";
import { IFormSignUpData } from "./Join.types";

export default function Join() {
  const { register, handleSubmit } = useForm<IFormSignUpData>({
    // resolver: yupResolver(loginSchema),
  });
  const { CreateUserSubmit } = useCreateUser();
  const onSubmitForm = (data: IFormSignUpData) => {
    const { passwordCheck, ...value } = data;
    void CreateUserSubmit(value);
  };

  return (
    <>
      <S.Wrapper>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <S.JoinHeader>JOIN MEMBER</S.JoinHeader>
          <S.JoinLine1></S.JoinLine1>
          <S.JoinBody>
            <S.InfoWrapper>
              <S.IdWrapper>
                <S.Id>아이디</S.Id>
                <S.IdInput
                  type="text"
                  placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
                  {...register("email")}
                />
              </S.IdWrapper>
              <S.PasswordWrapper>
                <S.Password>비밀번호</S.Password>
                <S.PassInput
                  type="password"
                  placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                  {...register("password")}
                />
              </S.PasswordWrapper>
              <S.PassCheckWrapper>
                <S.PassCheck>비밀번호 확인</S.PassCheck>
                <S.PassCheckInput
                  type="password"
                  placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                  {...register("passwordCheck")}
                />
              </S.PassCheckWrapper>
              <S.NameWrapper>
                <S.Name>이름</S.Name>
                <S.NameInput
                  type="text"
                  placeholder="ex) 홍길동"
                  {...register("name")}
                />
              </S.NameWrapper>
            </S.InfoWrapper>
          </S.JoinBody>
          <S.JoinLine2></S.JoinLine2>
          <S.JoinFooter>
            <S.JoinWrapper>
              <S.CancelButton type="button">취소</S.CancelButton>
              <S.ConfirmButton>확인</S.ConfirmButton>
            </S.JoinWrapper>
          </S.JoinFooter>
        </form>
      </S.Wrapper>
    </>
  );
}
