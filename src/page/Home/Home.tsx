import { useState } from "react";
import Header from "../../components/header/Header";
import List from "../../components/list/List";
import Sort from "../../components/sort/Sort";
import { IEntry } from "../../interface/IEntry";
import styles from "./Home.module.scss";

interface IHome {
  entry: IEntry[];
  onSort: (isUpper: boolean) => void;
}

const Home = ({ entry, onSort }: IHome) => {
  const [search, setSearch] = useState<IEntry[]>([]);

  const onSearch = (data: string) => {
    const result = entry.filter(
      (item: IEntry) => item["im:name"].label === data
    );
    if (result.length > 0) {
      setSearch(result);
    }
  };

  return (
    <div className={styles.home}>
      <Header
        search={search}
        onSearch={onSearch}
        onClearSearch={() => setSearch([])}
      />
      <Sort onSort={onSort} />
      <List entry={search.length > 0 ? search : entry} />
    </div>
  );
};

export default Home;
