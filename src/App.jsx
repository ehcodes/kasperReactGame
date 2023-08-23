import React, { useState } from "react";
import Header from "./components/Header/Header";
src/Header/Header.jsx
import Board from "./components/Board/Board";
import "./app.css";
export default function App() {
  // setting state
  const [newCard, setNewCard] = useState({});
  const [playerName, setPlayerName] = useState("Sara");
  // function to create a new card
  // a button to create new cards
  return (
    <div className="App">
      <Header />
      <h1>{playerName}</h1>
      <div className="inputs">
        <input placeholder="Player Name" />
        <input placeholder="Character Name" />
        <input placeholder="Character Race" />
        <input placeholder="Character Skills" />
        {/* SUBMIT BUTTON */}
        <button>Create Card</button>
      </div>
      <Board />
    </div>
  );
}
