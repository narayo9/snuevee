import { css } from "@emotion/react";
import SignIn from "~/components/signIn/SignIn";

const SignInPage = () => {
  return (
    <div
      css={css`
        padding: 200px 150px 0;
        margin: 0 auto;
      `}
    >
      <SignIn />
    </div>
  );
};

export default SignInPage;
