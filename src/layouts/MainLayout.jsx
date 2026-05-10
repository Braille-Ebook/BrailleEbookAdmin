import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import styles from "./MainLayout.module.css";

export default function MainLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className={styles.layout}>
      <Header onClick={() => setIsNavOpen((prev) => !prev)} />
      <div className={styles.content}>
        {isNavOpen && (
          <nav className={styles.nav}>
            <Navigation onClick={() => setIsNavOpen(false)} />
          </nav>
        )}
        <Outlet />
      </div>
    </div>
  );
}
