/* eslint-disable */

import React, { useState } from 'react';
import './App.css';
import test from './test.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contents_main">
        <Menu />
      </div>
      <div className="contents_sub">
        <Guide />
        {/* <Ask /> */}
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

const Guide = () => {
  return (
    <div className="guide">
      <p className="guide--title">이용 방법 안내</p>
      <div className="contents">
        <a href="/lectures">
          <div className="guide_box">
            <img className="guide--img" src={test} />
            <div className="guide--text">
              <p className="title">남은 강의 체크</p>
              <p className="description">졸업을 위해 들어야 하는 필수 강의를 체크해 알려줘요!</p>
              <p className="link">바로가기 ➡</p>
            </div>
          </div>
        </a>
        <a href="/timetable">
          <div className="guide_box">
            <img className="guide--img" src={test} />
            <div className="guide--text">
              <p className="title">시간표 입력</p>
              <p className="description">수강신청한 강의를 자동으로 시간표에 입력해요!</p>
              <p className="link">바로가기 ➡</p>
            </div>
          </div>
        </a>
        <a href="/chapel">
          <div className="guide_box">
            <img className="guide--img" src={test} />
            <div className="guide--text">
              <p className="title">채플 진행도</p>
              <p className="description">채플 진행 상황을 그래프로 알려줘요!</p>
              <p className="link">바로가기 ➡</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default App;
