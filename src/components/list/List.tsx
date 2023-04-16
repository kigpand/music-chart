import { IEntry } from "../../interface/IEntry";
import Item from "../item/Item";
import styles from "./List.module.scss";

interface IList {
  entry: IEntry[];
}

const List = ({ entry }: IList) => {
  return (
    <div className={styles.list}>
      {entry.map((item: IEntry, i: number) => {
        return <Item item={item} key={i} />;
      })}
    </div>
  );
};

export default List;
