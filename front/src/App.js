/* eslint-disable */

import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contents">
        <Menu />
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <div className="header">
      <div className="header--text">
        <span>
          <a href="/" className="text--link">
            침신대 수업 도우미
          </a>
        </span>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <>
      <a href="/lectures">
        <div className="menu">
          <div className="menu--img"></div>
          <div className="menu--text">
            <span>남은 강의 체크</span>
            <span>✅</span>
          </div>
        </div>
      </a>
      <a href="/timetable">
        <div className="menu">
          <div className="menu--img"></div>
          <div className="menu--text">
            <span>시간표 입력</span>
            <span>📝</span>
          </div>
        </div>
      </a>
      <a href="/chapel">
        <div className="menu">
          <div className="menu--img"></div>
          <div className="menu--text">
            <span>채플 진행도</span>
            <span>📆</span>
          </div>
        </div>
      </a>
    </>
  );
};


export default App;
