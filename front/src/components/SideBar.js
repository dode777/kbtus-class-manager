import React from 'react';
import { Link } from 'react-router-dom';

import test from '../img/test.jpg';
import home from '../img/home.png';
import ask from '../img/ask.png';
import info from '../img/info.png';
import logout from '../img/logout.png';

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="avatar">
        <img src={test} alt="avatar" className="user--img" />
        <div className="info">
          <p className="user--name">전도해</p>
          <p className="user--num">21720016</p>
          {/* <button className="log-out">로그아웃</button> */}
        </div>
        <Link to="/">
          <img src={logout} alt="logout" className="logout" />
        </Link>
      </div>
      <hr></hr>
      <div className="menu-wrapper">
        <div className="menu">
          <Link to="/">
            <div className="menu-box">
              <img src={home} alt="home" />
              <p>홈</p>
            </div>
          </Link>
          <Link to="/">
            <div className="menu-box">
              <img src={info} alt="info" className="icon_info" />
              <p>이용안내</p>
            </div>
          </Link>
          <Link to="/ask">
            <div className="menu-box">
              <img src={ask} alt="ask" />
              <p>문의하기</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
