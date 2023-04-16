import { IEntry } from "../../interface/IEntry";
import styles from "./Item.module.scss";

interface IItem {
  item: IEntry;
}

const Item = ({ item }: IItem) => {
  return <div className={styles.item}>{item["im:name"].label}</div>;
};

export default Item;
