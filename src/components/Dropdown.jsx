import useDropdown from "../hooks/useDropdown";
import icArrowDown from "../assets/ic_arrow_down.png";
import styles from "./Dropdown.module.css";

export default function Dropdown({ menu, value, onChange, className }) {
  const { open, closeDropdown, toggleDropdown } = useDropdown();
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.currentContainer} onClick={toggleDropdown}>
        <div className={styles.current}>
          <p>{value.name}</p>
          <img src={icArrowDown} className={styles.icon} />
        </div>
      </div>

      {open && (
        <div className={`${styles.dropdown}`}>
          {menu.map((m) => (
            <div
              key={m.id}
              className={styles.menu}
              onClick={(e) => {
                onChange(m);
                closeDropdown();
              }}
            >
              {m.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
