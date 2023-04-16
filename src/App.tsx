import { useCallback, useEffect, useState } from "react";
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
        console.error(e);
      });
  }, []);

  const onSort = useCallback(
    (isUpper: boolean) => {
      let result;
      if (isUpper) {
        result = [...entry].sort((a: IEntry, b: IEntry) => {
          const first = a["im:name"].label.toUpperCase();
          const second = b["im:name"].label.toUpperCase();
          if (first < second) return -1;
          if (first > second) return 1;
          return 0;
        });
      } else {
        result = [...entry].sort((a: IEntry, b: IEntry) => {
          const first = a["im:name"].label.toUpperCase();
          const second = b["im:name"].label.toUpperCase();
          if (first < second) return 1;
          if (first > second) return -1;
          return 0;
        });
      }
      setEntry(result);
    },
    [entry]
  );

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home entry={entry} onSort={onSort} />}
          ></Route>
          <Route path="/detail/:id" element={<Detail entry={entry} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
