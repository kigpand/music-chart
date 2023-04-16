import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <input className={styles.input} type="text" placeholder="검색"></input>
    </div>
  );
};

export default Header;
