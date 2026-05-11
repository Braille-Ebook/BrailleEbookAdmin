import Hamburger from "../assets/hamburger.png";
import styles from "./Header.module.css";

export default function Header({ ...props }) {
  return (
    <div className={styles.header}>
      <img src={Hamburger} className={styles.icon} {...props} />
      <h2 className={styles.title}>Braille Ebook Admin</h2>
    </div>
  );
}
