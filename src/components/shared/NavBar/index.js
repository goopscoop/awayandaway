import React from 'react';
import { Link } from 'react-router';

const NavBar = ({currentPage, links}) => {

  return (
    <div className="aaa-nav">
      <nav className="cl-effect-9">
        {
          links.map((el, i)=>{
            const { title, subtitle, action } = el;
            return (
              <a 
                onClick={action}
                href="#">
                <span>{title}</span>
                <span>{subtitle}</span>
              </a>
            );
          })
        }
      </nav>
    </div>
  );
}

export default NavBar;