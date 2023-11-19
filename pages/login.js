import React from "react";
import SignCard from "@/components/signCard";
import LoginForm from "@/components/loginForm";

export default function login() {
  return (
    <>
      <SignCard title={"會員登入"}>
        <LoginForm />
      </SignCard>
      <p>帳號：abc123@gmail.com</p>
      <p>密碼：abc123</p>
    </>
  );
}
