import React from 'react';
import { Link } from 'react-router-dom';

import test from '../img/test.jpg';
import home from '../img/home.png';
import ask from '../img/ask.png';
import info from '../img/info.png';
import logout from '../img/logout.png';
import chapel from '../img/chapel.png';
import timetable from '../img/timetable.png';
import lectures from '../img/lectures.png';

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
        <div className="category menu">
          <Link to="/">
            <div className="menu-box">
              <img src={home} alt="home" />
              <p>홈</p>
            </div>
          </Link>
          <Link to="/chapel">
            <div className="menu-box">
              <img src={chapel} alt="chapel" className="chapel--icon" />
              <p>채플 진행도</p>
            </div>
          </Link>
          <Link to="/timetable">
            <div className="menu-box">
              <img src={timetable} alt="timetable" />
              <p>시간표 입력</p>
            </div>
          </Link>
          <Link to="/lectures">
            <div className="menu-box">
              <img src={lectures} alt="lectures" className="lectures--icon" />
              <p>남은 강의 체크</p>
            </div>
          </Link>
        </div>
        <div className="service menu">
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
