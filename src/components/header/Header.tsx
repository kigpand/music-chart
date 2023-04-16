import { useRef } from "react";
import styles from "./Header.module.scss";

interface IHeader {
  onSearch: (data: string) => void;
}

const Header = ({ onSearch }: IHeader) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSearchBtn = () => {
    if (inputRef.current) {
      onSearch(inputRef.current.value);
    }
  };

  return (
    <div className={styles.header}>
      <input
        className={styles.input}
        type="text"
        placeholder="검색"
        ref={inputRef}
      ></input>
      <div onClick={onSearchBtn}>검색</div>
    </div>
  );
};

export default Header;
