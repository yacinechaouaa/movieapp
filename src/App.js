import "./componant/App.css";
import React from "react";
import { useState } from "react";
import Movie from "./componant/movie";
import Add from "./componant/add";
import { movies } from "./componant/information";
import Navbar from "./componant/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Film from "./componant/Film";

function App() {
  const [myfilms, setMyfilms] = useState(movies);
  const [name, setName] = useState("");
  const addfilm = (filmtoadd) => {
    return setMyfilms([...myfilms, filmtoadd]);
  };
  return (
    <div className="App">
      <Router>
        
          <Route
            exact
            path="/"
            render={() => (
              <Navbar name={name} setName={setName} className="navbar" />
            )}
          />
        
        <main>
          <Route
            exact
            path="/"
            render={() => <Movie myfilms={myfilms} name={name} />}
          />

          <Route exact path="/" render={() => <Add addfilm={addfilm} />} />
        </main>
        <Route path="/film/:id" render={() => <Film film={myfilms} />} />
      </Router>
    </div>
  );
}

export default App;
