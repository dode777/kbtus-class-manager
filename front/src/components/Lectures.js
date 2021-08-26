import React from 'react';

const Lectures = () => {
  return (
    <div className="lecture-wrapper content-box">
      <div className="lecture-header header">
        <p className="title">남은 강의 체크</p>
      </div>
      <hr></hr>
      <div className="lecture-content">
        <div className="must lecture-box">
          <p className="title">필수 수강 강의</p>
          <ul>
            <li>기독교 교육</li>
            <li>영미문학의 이해</li>
            <li>기독교 교육</li>
            <li>영미문학의 이해</li>
            <li>기독교 교육</li>
            <li>영미문학의 이해</li>
          </ul>
        </div>
        <div className="line"></div>
        <div className="did lecture-box">
          <p className="title">수강한 강의</p>
          <ul>
            <li>기독교 교육</li>
            <li>영미문학의 이해</li>
            <li>기독교 교육</li>
            <li>영미문학의 이해</li>
          </ul>
        </div>
        <div className="line"></div>
        <div className="todo lecture-box">
          <p className="title">남은 강의</p>
          <ul>
            <li>기독교 교육</li>
            <li>영미문학의 이해</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lectures;
