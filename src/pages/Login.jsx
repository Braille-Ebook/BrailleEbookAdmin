import React, { useState } from "react";
import Button from "../components/Button.jsx";
import InputBlock from "../components/InputBlock.jsx";
import icBtnVisibilityOff from "../assets/ic_btn_visibility_off.png";
import icBtnVisibilityOn from "../assets/ic_btn_visibility_on.png";
import logo from "../assets/braillebookIconPurple.png";
import styles from "./Login.module.css";

export default function Login() {
  const [data, setData] = useState({});
  const [pwOpen, setPwOpen] = useState(false);
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <div className={styles.logo}>
          <img src={logo} className={styles.logoImg} />
          <h1 className={styles.logoText}>Braille Ebook Admin</h1>
        </div>

        <div className={styles.inputs}>
          <InputBlock
            title="이메일"
            placeholder="이메일을 입력해주세요"
            value={data.email}
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
            className={styles.input}
          />
          <InputBlock
            title="비밀번호"
            type={pwOpen ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요"
            value={data.pw}
            onChange={(e) =>
              setData((prev) => ({ ...prev, pw: e.target.value }))
            }
            className={styles.input}
            suffix={
              <img
                src={pwOpen ? icBtnVisibilityOn : icBtnVisibilityOff}
                className={styles.pwIcon}
                onClick={() => setPwOpen((prev) => !prev)}
              />
            }
          />
          <Button
            variant="rectangle"
            disabled={!data.email || !data.pw}
            className={styles.btn}
          >
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
}
