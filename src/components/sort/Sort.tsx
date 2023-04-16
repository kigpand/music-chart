import styles from "./Sort.module.scss";
import UPPER from "../../imgs/upper.png";
import LOWER from "../../imgs/lower.png";
import React from "react";

interface ISort {
  onSort: (isUpper: boolean) => void;
}

const Sort = ({ onSort }: ISort) => {
  return (
    <div className={styles.sort}>
      <img
        src={UPPER}
        alt="오름차순"
        className={styles.img}
        onClick={() => onSort(true)}
      ></img>
      <img
        src={LOWER}
        alt="내림차순"
        className={styles.img}
        onClick={() => onSort(false)}
      ></img>
    </div>
  );
};

export default React.memo(Sort);
