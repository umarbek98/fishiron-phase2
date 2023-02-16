import React from "react";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  return (
    <header>
      <h1>
        <Link className='headerLink' to='/'>
        FishIron <b>//</b>
        <span role="img">
        🐟
        </span>
        </Link>
      </h1>
      <NavLink className="new-button" to='/newfishfrom' >Add More Fish
        </NavLink>
    </header>
  );
}

export default Header;
