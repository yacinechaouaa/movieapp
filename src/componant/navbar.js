import React from "react";

const Navbar = (props) => {
  const handlchange = (e) => {
    props.setName(e.target.value);
  };
  return (
    <div>
      <header>
        <input
          type="text"
          placeholder="search your movie here"
          onChange={handlchange}
          className="search"
        />
        <div>
          <h1>movie App </h1>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
