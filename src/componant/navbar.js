import React from "react";

const Navbar = (props) => {
  const handlchange = (e) => {
    props.setName(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="search your movie here"
        onChange={handlchange}
        className="search"
      />
    </div>
  );
};

export default Navbar;
