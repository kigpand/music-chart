import { IEntry } from "../../interface/IEntry";
import styles from "./DetailBody.module.scss";
import BodyItem from "./bodyItem/BodyItem";

interface IDetailBody {
  item: IEntry;
}

const DetailBody = ({ item }: IDetailBody) => {
  return (
    <div className={styles.detailBody}>
      <a
        className={styles.link}
        target="_blank"
        rel="noreferrer"
        href={item.link.attributes.href}
      >
        view Album
      </a>
      <img
        src={item["im:image"][0].label}
        alt="item"
        className={styles.img}
      ></img>
      <div className={styles.title}>{item["im:name"].label}</div>
      <BodyItem title="장르" text={item.category.attributes.term} />
      <BodyItem
        title="아티스트"
        text={item["im:artist"].label}
        url={item["im:artist"].attributes.href}
      />
      <BodyItem
        title="발매일"
        text={`${new Date(
          item["im:releaseDate"].label
        ).getFullYear()}.${new Date(
          item["im:releaseDate"].label
        ).getMonth()}.${new Date(item["im:releaseDate"].label).getDate()}`}
      />
      <BodyItem title="price" text={item["im:price"].label} />
    </div>
  );
};

export default DetailBody;
