import React from "react";
import "../App.css";
import Card from "./card";

const Movie = (props) => {
  return (
    <div>
      <div className="movies">
        {props.myfilms
          .filter((el) =>
            el.name.toLowerCase().includes(props.name.toLowerCase())
          )
          .map((el) => (
            <Card el={el} />
          ))}
      </div>
    </div>
  );
};

export default Movie;
