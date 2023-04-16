import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { IEntry } from "./interface/IEntry";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Detail from "./page/Detail/Detail";

function App() {
  const [entry, setEntry] = useState<IEntry[]>([]);

  useEffect(() => {
    fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
      .then((res) => res.json())
      .then((response: any) => {
        setEntry(response.feed.entry);
      })
      .catch((e: any) => {
        alert("error");
      });
  }, []);

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home entry={entry} />}></Route>
          <Route path="/detail/:id" element={<Detail entry={entry} />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Header onSearch={onSearch} />
      <Sort />
      <List entry={search.length > 0 ? search : entry} /> */}
    </div>
  );
}

export default App;
