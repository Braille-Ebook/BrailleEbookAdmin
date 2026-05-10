import { Link } from "react-router-dom";
import { navigations } from "../constants/nav";
import styles from "./Navigation.module.css";

export default function Navigation({ ...props }) {
  return (
    <>
      {Object.values(navigations).map((n) => (
        <Link to={n.link} key={n.id} className={styles.btn} {...props}>
          {n.name}
        </Link>
      ))}
    </>
  );
}
