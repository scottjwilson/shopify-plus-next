import styles from "@/styles/Footer.module.scss";
export default function Footer() {
  return (
    <footer className={styles.footer__container}>
      <div className={styles.footer__box}>
        <div className={styles.footer__flex}>
          <div className={styles.footer__text}>
            <p>
              © {new Date().getFullYear()}
              Copyright
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
