import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import constant from "../constants/dropdown";
import styles from "./AddBooks.module.css";

export default function AddBooks() {
  const [selected, setSelected] = useState(constant[0]);
  const [data, setData] = useState({
    title: "",
    genre: "",
    author: "",
    translator: "",
    publisher: "",
    publish_date: null,
    summary: "",
    ISBN: "",
    image_url: "",
    pdf_url: "",
  });
  return (
    <div className={styles.page}>
      <h2 className={styles.title}>책 추가하기</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={styles.form}
      >
        <Input
          placeholder="제목을 입력해주세요"
          value={data.title}
          onChange={(e) => {
            setData((prev) => ({ ...prev, title: e.target.value }));
          }}
          className={styles.input}
        />
        <Input
          placeholder="작가를 입력해주세요"
          value={data.author}
          onChange={(e) => {
            setData((prev) => ({ ...prev, author: e.target.value }));
          }}
          className={styles.input}
        />
        <Input
          placeholder="번역가를 입력해주세요"
          value={data.translator}
          onChange={(e) => {
            setData((prev) => ({ ...prev, translator: e.target.value }));
          }}
          className={styles.input}
        />
        <Input
          placeholder="출판사를 입력해주세요"
          value={data.publisher}
          onChange={(e) => {
            setData((prev) => ({ ...prev, publisher: e.target.value }));
          }}
          className={styles.input}
        />
        <Input
          placeholder="ISBN을 입력해주세요"
          value={data.ISBN}
          onChange={(e) => {
            setData((prev) => ({ ...prev, ISBN: e.target.value }));
          }}
          className={styles.input}
        />
        <Input
          placeholder="이미지 링크를 입력해주세요"
          value={data.image_url}
          onChange={(e) => {
            setData((prev) => ({ ...prev, image_url: e.target.value }));
          }}
          className={styles.input}
        />
        <Input
          placeholder="pdf 링크를 입력해주세요"
          value={data.pdf_url}
          onChange={(e) => {
            setData((prev) => ({ ...prev, pdf_url: e.target.value }));
          }}
          className={styles.input}
        />
        <Dropdown
          menu={constant}
          value={selected}
          onChange={(s) => {
            if (s !== selected) {
              setSelected(s);
            }
          }}
        />
      </form>
      <Button className={styles.btn} variant="rectangle">
        추가하기
      </Button>
    </div>
  );
}
