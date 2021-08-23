/* eslint-disable */

import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <div className="nav--left">
          <span>
            <a href="/">KBTUS CLASS MANAGER</a>
          </span>
        </div>
        <div className="nav--right">
          <span>로그인 | 회원가입</span>
          <span>이용안내</span>
          <span>문의하기</span>
        </div>
      </div>
      <div className="contents">
        <div className="menu">
          <div className="menu--img"></div>
          <div className="menu--text">남은 강의 체크</div>
        </div>
        <div className="menu">
          <div className="menu--img"></div>
          <div className="menu--text">시간표 입력</div>
        </div>
        <div className="menu">
          <div className="menu--img"></div>
          <div className="menu--text">채플 진행도</div>
        </div>
      </div>
    </div>
  );
}

export default App;
