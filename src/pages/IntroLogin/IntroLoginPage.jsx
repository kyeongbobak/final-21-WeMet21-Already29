import React from "react";
import charaterLogo from "../../assets/images/mascot.png";
import { EmailLoginLink, EmailSignUpLink, StyledIntroLoginPage } from "./IntroLoginStyle";

function IntroLoginPage() {
  return (
    <StyledIntroLoginPage>
      <h1>입9팔9</h1>
      <p className="sub-title">데일리룩과 취향을 공유하며 지속가능한 패션을 함께 만들어가는 공간</p>
      <img src={charaterLogo} alt="입구팔구 마스코트 캐릭터 사진" />
      <EmailLoginLink to="login">이메일로 로그인</EmailLoginLink>
      <p className="signup-text">
        <span>처음오셨나요?</span>
        <EmailSignUpLink to="signup">이메일로 가입하기</EmailSignUpLink>
      </p>
    </StyledIntroLoginPage>
  );
}

export default IntroLoginPage;
