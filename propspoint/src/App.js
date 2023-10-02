// src/App.js

import React from "react";
// import PlayersList from "./PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";
// import Player from "./components/Player";
// import Players from "./components/Players";
import PlayersList from "./components/PlayersList";


function App() {
  return (
    <div className="App">
      <h1>Welcome to My Football App</h1>
      {/* <Player></Player> */}
      {/* <Players></Players> */}
      <PlayersList />
    </div>
  );
}

export default App;
