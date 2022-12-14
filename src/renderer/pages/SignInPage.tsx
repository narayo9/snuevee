import { css } from "@emotion/react";
import SignIn from "@renderer/components/signIn/SignIn";

function SignInPage() {
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
}

export default SignInPage;
