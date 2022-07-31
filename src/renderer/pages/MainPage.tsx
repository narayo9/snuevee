import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";


const MainButton = styled(Button)`
  margin-right: 15px;
  &:last-of-type {
    margin-right: 0;    
  }
`

const MainPage = () => {
  return (
    <div
      css={css`
        padding-top: 250px;
        margin: 0 auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <h1 css={css`font-size: 100px; font-weight: bold; margin-bottom: 12px; `}>SNUEVEE</h1>
      <p css={css`font-size: 30px;`}>서울대 강의평가 원클릭 검색 앱</p>
      <div>
        <Link to="/sign-in">
          <MainButton type="primary" size="large">
            클릭하여 시작
          </MainButton>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
