import Link from "next/link";
import styles from "@/styles/Header.module.scss";
export default function Header() {
  return (
    <header>
      <div className={styles.header__container}>
        <div>
          <Link href="/">
            <a>
              <span>Cafee</span>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
