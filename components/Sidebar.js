import styles from "@/styles/components/Sidebar.module.scss";
const Sidebar = ({ isOpen }) => {
  return (
    <>
      <aside className={isOpen ? styles.open : styles.closed}>
        <h1>hey</h1>
      </aside>
    </>
  );
};

export default Sidebar;
