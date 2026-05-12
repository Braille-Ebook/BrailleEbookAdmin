import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addBooks } from "../apis/book";
import Input from "../components/Input";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import constant from "../constants/dropdown";
import styles from "./AddBooks.module.css";

export default function AddBooks() {
  const initData = {
    title: "",
    author: "",
    translator: "",
    publisher: "",
    publish_date: "",
    summary: "",
    ISBN: "",
    image_url: "",
    pdf_url: "",
  };
  const [selected, setSelected] = useState(constant[0]);
  const [data, setData] = useState(initData);
  const mutation = useMutation({
    mutationFn: addBooks,
    onSuccess: () => {
      setData(initData);
    },
    onError: (err) => {
      console.error(err);
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutation.mutate({ ...data, genre: selected.name });
      }}
      className={styles.page}
    >
      <h2 className={styles.title}>책 추가하기</h2>
      <div className={styles.form}>
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
        <div className={styles.dateInput}>
          <h2>출판일</h2>
          <input
            type="date"
            value={data.publish_date ?? ""}
            onChange={(e) => {
              setData((prev) => ({
                ...prev,
                publish_date: e.target.value,
              }));
            }}
          />
        </div>
        <Input
          multiline={true}
          placeholder="줄거리를 입력해주세요"
          value={data.summary}
          onChange={(e) => {
            setData((prev) => ({ ...prev, summary: e.target.value }));
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
      </div>
      <Button
        type="submit"
        variant="rectangle"
        disabled={mutation.isPending}
        className={styles.btn}
      >
        추가하기
      </Button>
    </form>
  );
}
