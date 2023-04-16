import { IEntry } from "../../interface/IEntry";
import Item from "../item/Item";
import styles from "./List.module.scss";

interface IList {
  entry: IEntry[];
}

const List = ({ entry }: IList) => {
  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <div className={styles.imgContainer}></div>
        <div className={styles.title}>곡정보</div>
        <div className={styles.artist}>아티스트</div>
        <div className={styles.type}>장르</div>
        <div className={styles.date}>발매일</div>
      </div>
      {entry.map((item: IEntry, i: number) => {
        return <Item item={item} key={i} />;
      })}
    </div>
  );
};

export default List;
