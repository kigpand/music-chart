import { useParams } from "react-router-dom";
import { IEntry } from "../../interface/IEntry";
import styles from "./Detail.module.scss";
import { useEffect, useState } from "react";
import DetailBody from "../../components/detailBody/DetailBody";

interface IDetail {
  entry: IEntry[];
}

const Detail = ({ entry }: IDetail) => {
  const { id } = useParams();
  const [detail, setDetail] = useState<IEntry | null>(null);

  useEffect(() => {
    const result = entry.find(
      (item: IEntry) => item.id.attributes["im:id"] === id
    );
    if (!result) return;
    setDetail(result);
  }, [entry, id]);

  return (
    <div className={styles.detail}>
      {detail && <DetailBody item={detail} />}
    </div>
  );
};

export default Detail;
