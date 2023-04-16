import { useRef } from "react";
import styles from "./Header.module.scss";
import SEARCH from "../../imgs/search.png";
import RELOAD from "../../imgs/reload.png";
import { IEntry } from "../../interface/IEntry";

interface IHeader {
  search: IEntry[];
  onSearch: (data: string) => void;
  onClearSearch: () => void;
}

const Header = ({ search, onSearch, onClearSearch }: IHeader) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSearchBtn = () => {
    if (inputRef.current) {
      onSearch(inputRef.current.value);
      inputRef.current.value = "";
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
      <img
        src={SEARCH}
        onClick={onSearchBtn}
        alt="search"
        className={styles.search}
      ></img>
      {search.length > 0 && (
        <img
          src={RELOAD}
          onClick={onClearSearch}
          alt="search"
          className={styles.search}
        ></img>
      )}
    </div>
  );
};

export default Header;
