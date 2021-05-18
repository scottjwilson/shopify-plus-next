import styles from "@/styles/components/PageHero.module.scss";

const PageHero = ({ title, subtitle }) => {
  return (
    <div className={styles.pagehero__container}>
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
    </div>
  );
};

export default PageHero;
