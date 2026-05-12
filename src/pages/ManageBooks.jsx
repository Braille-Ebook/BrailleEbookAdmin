import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getBooks, deleteBooks } from "../apis/book.js";
import Input from "../components/Input.jsx";
import Dropdown from "../components/Dropdown.jsx";
import Button from "../components/Button.jsx";
import queryType from "../constants/queryType.js";
import styles from "./ManageBooks.module.css";

const columns = [
  "book_id",
  "title",
  "author",
  "translator",
  "publisher",
  "publish_date",
  "genre",
  "ISBN",
  "summary",
  "image_url",
  "pdf_url",
];
const dummy = [
  {
    book_id: 526,
    title: "EBS 수능특강 고등 과학탐구영역 물리학2(2021)(2022 수능대비)",
    image_url:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5580137%3Ftimestamp%3D20240223180606",
    genre: "과학",
    author: "EBS교육방송 편집부",
    translator: null,
    publisher: "EBS한국교육방송공사",
    publish_date: "2021-01-28T15:00:00.000Z",
    summary:
      "수능 연계교재 〈수능특강〉    2022학년도 수능 완벽 대비  최신 수능 경향과 기출 유형을 분석한 2022학년도 수능 대비 종합 개념서    [EBS에서 준비한 수능특강 연계 완전 정복 커리큘럼]  ①수능특강: 교육과정과 최신 수능을 반영한 핵심 내용 제시, 수능 시험을 대비하는 학생이라면 꼭 봐야 할 교재  ②수능특강 사용설명서: 진짜가 만든 진짜 분석집, 수능특강을 공부하는 가장 쉽고 빠른 방법  ③수능특강 연계 기출: 수능특강과의 완벽",
    length: null,
    ISBN: "9788954757010",
    bookmark_num: 0,
    pdf_url: null,
  },
  {
    book_id: 527,
    title: "과학동아+수학동아 특별합본호(2021년 12월호)",
    image_url:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5144032%3Ftimestamp%3D20250531135412",
    genre: "과학",
    author: "동아사이언스 편집부",
    translator: null,
    publisher: "동아사이언스",
    publish_date: "2021-11-23T15:00:00.000Z",
    summary:
      "국내외 첨단 과학 소식을 정확하고 자세하게 전달하고, 참신한 사진과 상세한 일러스트로 재미있고 이해하기 쉽게 과학이론을 알려주는 과학잡지 『과학동아』+ 생활 속에서 찾을 수 있는 수학을 주제로 시사, 문화, 역사, 과학, 예술 등 다양한 분야를 통합해 다루는 수학잡지 『수학동아』합본호.",
    length: null,
    ISBN: "9788962867145",
    bookmark_num: 0,
    pdf_url: null,
  },
  {
    book_id: 531,
    title: "고양이의 상징성 해석에 관한 연구",
    image_url: "https://image.yes24.com/Goods/60896871/M",
    genre: "과학",
    author: "황준희",
    translator: "신지현",
    publisher: "상징과모래놀이치료",
    publish_date: "2026-05-10T00:00:00.000Z",
    summary: "고양이는 최고입니다",
    length: 46,
    ISBN: "1234567",
    bookmark_num: 0,
    pdf_url:
      "https://www.sandplay.or.kr/img_up/shop_pds/kp645/contents/myboard/sub05/03.-hwang-jun-hui-sin-ji-hyeon.pdf",
  },
];

export default function ManageBooks() {
  const queryClient = useQueryClient();
  const [qtype, setQtype] = useState(queryType[0]);
  const [query, setQuery] = useState({
    q: "",
    sort: "",
    sortDir: "",
  });
  const [submittedQuery, setSubmittedQuery] = useState({
    q: "",
    sort: "",
    sortDir: "",
  });
  const [selectedBooks, setSelectedBooks] = useState([]);

  const { data } = useQuery({
    queryKey: [
      "getBooks",
      submittedQuery.q,
      submittedQuery.sort,
      submittedQuery.sortDir,
      qtype.type,
    ],
    queryFn: () => getBooks({ ...submittedQuery, qtype: qtype.type }),
    enabled: !!submittedQuery,
    retry: false,
  });

  const mutation = useMutation({
    mutationFn: deleteBooks,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getBooks"] });
    },
  });

  useEffect(() => {
    setSelectedBooks([]);
  }, [data?.data]);

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Manage Books</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmittedQuery(query);
        }}
        className={styles.search}
      >
        <Input
          value={query.q}
          onChange={(e) => {
            setQuery((prev) => ({
              ...prev,
              q: e.target.value,
            }));
          }}
          placeholder="검색하기"
          className={styles.input}
        />
        <Dropdown
          menu={queryType}
          value={qtype}
          onChange={(s) => {
            if (s !== qtype) {
              setQtype(s);
            }
          }}
        />
        <Button variant="rectangle" type="submit">
          찾기
        </Button>
      </form>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHead}>
            <th>select</th>

            {columns.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data?.data?.map((d) => {
            const isSelected = selectedBooks.includes(d.book_id);

            return (
              <tr
                key={d.book_id}
                className={isSelected ? styles.selectedRow : ""}
              >
                <td>
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedBooks((prev) => [...prev, d.book_id]);
                      } else {
                        setSelectedBooks((prev) =>
                          prev.filter((id) => id !== d.book_id),
                        );
                      }
                    }}
                  />
                </td>

                {columns.map((col) => (
                  <td key={col}>{d[col] ?? ""}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.deleteBtn}>
        <Button
          variant="rectangle"
          type="button"
          onClick={() => {
            selectedBooks.forEach((id) => mutation.mutate(id));
            setSelectedBooks([]);
          }}
        >
          삭제하기
        </Button>
      </div>
    </div>
  );
}
