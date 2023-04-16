import { IEntry } from "../../interface/IEntry";
import styles from "./DetailBody.module.scss";
import BodyItem from "./bodyItem/BodyItem";
import BACK from "../../imgs/back.png";
import { useNavigate } from "react-router-dom";

interface IDetailBody {
  item: IEntry;
}

const DetailBody = ({ item }: IDetailBody) => {
  const nav = useNavigate();

  return (
    <div className={styles.detailBody}>
      <img
        src={BACK}
        alt="back"
        className={styles.back}
        onClick={() => nav("/")}
      />
      <a
        className={styles.link}
        target="_blank"
        rel="noreferrer"
        href={item.link.attributes ? item.link.attributes.href : ""}
      >
        view
      </a>
      <img
        src={item["im:image"][item["im:image"].length - 1].label}
        alt="item"
        className={styles.img}
      ></img>
      <div className={styles.title}>{item["im:name"].label}</div>
      <BodyItem title="장르" text={item.category.attributes.term} />
      <BodyItem
        title="아티스트"
        text={item["im:artist"].label}
        url={
          item["im:artist"].attributes ? item["im:artist"].attributes.href : ""
        }
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
