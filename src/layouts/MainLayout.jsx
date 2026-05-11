import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import styles from "./MainLayout.module.css";

export default function MainLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isNavOpen]);

  return (
    <div className={styles.layout}>
      <Header onClick={() => setIsNavOpen((prev) => !prev)} />
      <div onClick={() => setIsNavOpen(false)} className={styles.content}>
        {isNavOpen && (
          <div className={styles.navContainer}>
            <nav className={styles.nav} onClick={(e) => e.stopPropagation()}>
              <Navigation onClick={() => setIsNavOpen(false)} />
            </nav>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}
