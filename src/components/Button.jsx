import styles from "./Button.module.css";

export default function Button({
  variant,
  children,
  disabled = false,
  className,
  ...props
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      {...props}
      className={`${styles.btn} ${styles[`btn-${variant}`]} ${disabled && styles.disabled} ${className}`}
    >
      {children}
    </button>
  );
}
