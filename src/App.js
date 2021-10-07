import "./App.css";
import React from "react";
import { useState } from "react";
import Movie from "./componant/movie";
import Add from "./componant/add";
import { movies } from "./componant/information";
import Navbar from "./componant/navbar";


function App() {
  const [myfilms, setMyfilms] = useState(movies);
  const [name, setName] = useState("");
  const addfilm = (filmtoadd) => {
    return setMyfilms([...myfilms, filmtoadd]);
  };
  return (
    <div className="App">
      <header>
        <div>
          <h1>movie App </h1>
        </div>
        <Navbar name={name} setName={setName} className="navbar" />
      </header>
      <main>
        <Movie myfilms={myfilms} name={name} />
        <h2>add your favorite movie here </h2>
        <Add addfilm={addfilm} />
      </main>
    </div>
  );
}

export default App;
