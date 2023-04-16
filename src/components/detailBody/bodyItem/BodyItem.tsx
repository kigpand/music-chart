import styles from "./BodyItem.module.scss";

interface IBodyItem {
  title: string;
  text: string;
  url?: string;
}

const BodyItem = ({ title, text, url }: IBodyItem) => {
  return (
    <div className={styles.bodyItem}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
      {url && (
        <a href={url} className={styles.url} target="_blank" rel="noreferrer">
          view
        </a>
      )}
    </div>
  );
};

export default BodyItem;
