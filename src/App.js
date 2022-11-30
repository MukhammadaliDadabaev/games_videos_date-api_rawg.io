import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./redux/actions/gamesAction";

function App() {
  // useDispatch
  const dispatch = useDispatch();
  // useEffect
  useEffect(() => {
    dispatch(loadGames());
  });

  return (
    <div className="App">
      <h1>Games Date-API</h1>
    </div>
  );
}

export default App;
