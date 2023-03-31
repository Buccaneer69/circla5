import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../public/img/logo.png'; // Replace with your logo image path

function TopBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const isLandingPage = location.pathname === '/';

  return (
    <header className="top-bar">
      {!isLandingPage && (
        <button className="go-back" onClick={goBack}>
          <div className="round-reply-icon">
            <i className="fa fa-reply"></i>
          </div>
        </button>
      )}
      <a href="/" >
        <img src={logo} alt="Logo" className="logo" />
      </a>
    </header>
  );
}

export default TopBar;
