import { useState } from "react";
import Header from "../../components/header/Header";
import List from "../../components/list/List";
import Sort from "../../components/sort/Sort";
import { IEntry } from "../../interface/IEntry";
import styles from "./Home.module.scss";

interface IHome {
  entry: IEntry[];
}

const Home = ({ entry }: IHome) => {
  const [search, setSearch] = useState<IEntry[]>([]);

  const onSearch = (data: string) => {
    const result = entry.filter(
      (item: IEntry) => item["im:name"].label === data
    );
    if (result.length > 0) {
      setSearch(result);
    }
  };

  const onSort = (isUpper: boolean) => {
    if (isUpper) {
    }
  };
  return (
    <div className={styles.home}>
      <Header onSearch={onSearch} />
      <Sort />
      <List entry={search.length > 0 ? search : entry} />
    </div>
  );
};

export default Home;
