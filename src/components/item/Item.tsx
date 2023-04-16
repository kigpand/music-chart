import { useNavigate } from "react-router-dom";
import { IEntry } from "../../interface/IEntry";
import styles from "./Item.module.scss";

interface IItem {
  item: IEntry;
}

const Item = ({ item }: IItem) => {
  const nav = useNavigate();

  const onNav = () => {
    nav(`/detail/${item.id.attributes["im:id"]}`);
  };
  return (
    <div className={styles.item} onClick={onNav}>
      <div className={styles.imgContainer}>
        <img src={item["im:image"][0].label} alt="img" className={styles.img} />
      </div>
      <div className={styles.title}>{item["im:name"].label}</div>
      <div className={styles.artist}>{item["im:artist"].label}</div>
      <div className={styles.type}>{item.category.attributes.term}</div>
      <div className={styles.date}>
        {new Date(item["im:releaseDate"].label).getFullYear()}.
        {new Date(item["im:releaseDate"].label).getMonth()}.
        {new Date(item["im:releaseDate"].label).getDate()}
      </div>
    </div>
  );
};

export default Item;
