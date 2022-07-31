import { useState } from "react";
import EveryTimeTypeInfoStep from "./EveryTimeTypeInfoStep";

export const initialSignInStep: SignInStep = "EVERYTIME_TYPE_INFO";
export type SignInStep =
  | "EVERYTIME_TYPE_INFO"
  | "EVERYTIME_LOGGING_IN"
  | "SNULIFE_TYPE_INFO"
  | "SNULIFE_LOGGING_IN";

const SignIn = () => {
  const [step, setStep] = useState<SignInStep>(initialSignInStep);
  return (
    <>
      {step === "EVERYTIME_TYPE_INFO" ? (
        <EveryTimeTypeInfoStep onNext={() => setStep("EVERYTIME_LOGGING_IN")} />
      ) : null}
    </>
  );
};

export default SignIn;
