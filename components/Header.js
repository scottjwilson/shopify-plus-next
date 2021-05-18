import Link from "next/link";
import styles from "@/styles/Header.module.scss";
import { FaHandScissors } from "react-icons/fa";
import { linkData } from "./linkData";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__top}></div>
      <div className={styles.header__container}>
        {/* LOGO */}
        <div>
          <Link href="/">
            <a>
              <span>Goodshop</span>
            </a>
          </Link>
        </div>
        {/* MAIN NAV */}
        <nav className={styles.header__nav}>
          <div className={styles.header__links}>
            <ul>
              {linkData.map((link) => {
                const { id, href } = link;
                return (
                  <li key={id}>
                    <Link href={href}>
                      <a>{href}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
