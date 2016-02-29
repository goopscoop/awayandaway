import React from 'react';
import { Link } from 'react-router';

const NavBar = ({currentPage}) => {
  return (
    <div className="aaa-nav">
      <nav className="cl-effect-9">
        {
          currentPage !== 'home' ?
          <Link to="/">
            <span>Home</span>
            <span>Discover</span>
          </Link>
          :
          <span></span>
        }
        {
          currentPage !== 'books' ?
          <Link to="books">
            <span>Books</span>
            <span>Adventure Awaits</span>
          </Link>
          :
          <span></span>
        }
        {
          currentPage !== 'about' ?
          <a href="#">
            <span>About</span>
            <span>Author S.C. Barrus</span>
          </a>
          :
          <span></span>
        }
        
      </nav>
    </div>
  );
}

export default NavBar;