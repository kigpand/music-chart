import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { IEntry } from "./interface/IEntry";
import Header from "./components/header/Header";
import Sort from "./components/sort/Sort";
import List from "./components/list/List";

function App() {
  const [chart, setChart] = useState<IEntry[]>([]);

  useEffect(() => {
    fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
      .then((res) => res.json())
      .then((response: any) => {
        setChart(response.feed.entry);
      })
      .catch((e: any) => {
        alert("error");
      });
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Sort />
      {chart.length > 0 ? <List entry={chart} /> : <div>로딩중</div>}
    </div>
  );
}

export default App;
