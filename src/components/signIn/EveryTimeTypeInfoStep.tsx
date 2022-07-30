import { Typography } from "antd";
import { useSetRecoilState } from "recoil";
import { loginInfoState } from "~/recoil/atoms/auth";
import BasicAuthForm from "./BasicAuthForm";

export interface Props {
  onNext: () => void
}

const EveryTimeTypeInfoStep: React.FC<Props> = ({ onNext }) => {
  const setEveryTimeTypeInfo = useSetRecoilState(loginInfoState)
  return (
    <>
      <Typography.Title
        level={1}
      >
        <br /> 먼저 에브리타임의 아이디와 <br /> 비밀번호를 입력해주세요.
      </Typography.Title>
      <BasicAuthForm onValid={(values) => {
        setEveryTimeTypeInfo(oldState => ({
          ...oldState,
          everytime: values
        }))
        onNext()
      }} />
    </>
  );
};

export default EveryTimeTypeInfoStep;