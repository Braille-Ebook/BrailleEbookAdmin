import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h2 className={styles.title}>
        Braille Ebook 어드민 페이지에 오신 것을 환영합니다.
      </h2>
      <div className={styles.quickStart}>
        <h4>빠른 시작</h4>
        <div className={styles.links}>
          <Link to="/add">책 추가하기</Link>
          <Link to="/manage">책 관리하기</Link>
        </div>
      </div>
    </div>
  );
}
