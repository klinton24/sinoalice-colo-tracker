import React from "react";
import styles from "./App.module.css";
import { Cards, OpponentPicker } from "./components";
//import { fetchData } from "./data/";

class App extends React.Component {

  render() {
    return (
      <div className={styles.container}>
        <h1>Starry SinoAlice Colo Tracker</h1>
      </div>
    );
  }
}

export default App;