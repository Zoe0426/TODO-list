import React, { useState } from "react";
import Input from "./input";
import styles from "./loginForm.module.css";
import MainBtn from "./mainBtn";
import SecondBtn from "./secondBtn";
import { useRouter } from "next/router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isError = false;

    if (email === "") {
      setEmailError("請輸入 Email 地址。");
      isError = true;
    }

    if (password === "") {
      setPasswordError("請輸入密碼。");
      isError = true;
    }

    if (!isError) {
      console.log(`Email: ${email}, Password: ${password}`);
      router.push("/todoList");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);

    if (e.target.value === "") {
      setEmailError("請輸入 Email 地址。");
    } else if (!isEmailValid(e.target.value)) {
      setEmailError("* 請輸入有效的電子信箱");
    } else {
      setEmailError("");
    }
  };

  const pwdHandler = (e) => {
    setPassword(e.target.value);

    if (e.target.value === "") {
      setPasswordError("請輸入密碼。");
    } else {
      setPasswordError("");
    }
  };

  return (
    <>
      <form action='#' name='form1' onSubmit={handleSubmit}>
        <Input type={"text"} placeholder={"請輸入 Email 帳號"} value={email} changeHandler={emailHandler} />
        <div className={styles.error}>{emailError}</div>
        <Input type={"password"} placeholder={"請輸入密碼"} value={password} changeHandler={pwdHandler} />
        <div className={styles.error}>{passwordError}</div>
        <div className={styles.btnContent}>
          <SecondBtn type={"button"} text={"註冊會員"} onClick={() => router.push("/register")} />
          <MainBtn type={"submit"} text={"登入"} />
        </div>
      </form>
    </>
  );
}
