import React from 'react';
import { Link } from 'react-router';
import './style.css';

const NavBar = ({currentPage }) => {
  const links = [
    {
      title: 'Home',
      subtitle: 'of S.C. Barrus',
      url: '/'
    },
    {
      title: 'Books',
      subtitle: 'Adventure Awaits',
      url: '/books'
    },
    {
      title: 'About',
      subtitle: 'the Author',
      url: '/about'
    }
  ];

  const generateLinks = () => links.map((el, i) => {
    const { title, subtitle, url } = el;

    // disable links on current page
    if( title.toLowerCase() === currentPage.toLowerCase()){
      return (
        <Link 
          to={`${url}`}
          key={i}
          onClick={e => e.preventDefault()}
          className="disabled-link"
          disabled>
          <span>{title}</span>
          <span>{subtitle}</span>
        </Link>
      )
    }

    // return normal link for other pages
    return (
      <Link 
        to={`${url}`}
        key={i} disabled>
        <span>{title}</span>
        <span>{subtitle}</span>
      </Link>
    );
  });

  const displayTitles = () => {
    if(currentPage.toLowerCase() !== 'home'){
      return (
        <div>
          <h1>
            {currentPage}
          </h1>
          <p className="nav-subtitle">Away & Away - Home of Author S.C. Barrus</p>
        </div>
      )
    }
  }

  return (
    <div className="row">
      {
        displayTitles()
      }
      <div className="aaa-nav">
        <nav className="cl-effect-9">
          {
            generateLinks()
          }
        </nav>
      </div>
    </div>
  );
}

export default NavBar;