import React from 'react';
import { Link } from 'react-router-dom';

const Timetable = () => {
  return (
    <div className="timetable-wrapper content-box">
      <div className="timetable-header header">
        <p className="title">시간표 입력</p>
        <button className="timetable--push">입력하기</button>
      </div>
      <hr></hr>
      <div className="timetable-content">
        <div className="mon days">
          <p>월요일</p>
        </div>
        <div className="tue days">
          <p>화요일</p>
          <p>
            <span>이단과 복음</span>
            <span>(1교시 - 2교시)</span>
          </p>
          <p>
            <span>채플</span>
            <span>(3교시)</span>
          </p>
          <p>
            <span>영어교재 연구</span>
            <span>(5교시 - 7교시)</span>
          </p>
          <p>
            <span>청소년사역의 신학적 기초</span>
            <span>(8교시 - 9교시)</span>
          </p>
        </div>
        <div className="wed days">
          <p>수요일</p>
          <p>
            <span>스크린 영어</span>
            <span>(5교시 - 7교시)</span>
          </p>
        </div>
        <div className="thu days">
          <p>목요일</p>
          <p>
            <span>인간관계와 정신건강</span>
            <span>(1교시 - 2교시)</span>
          </p>
          <p>
            <span>채플</span>
            <span>(3교시)</span>
          </p>
          <p>
            <span>선교 영어</span>
            <span>(5교시 - 7교시)</span>
          </p>
        </div>
        <div className="fri days">
          <p>금요일</p>
        </div>
      </div>
      <div className="timetable-footer">
        <p>
          <Link to="/timetable">SEE MORE</Link>
        </p>
      </div>
    </div>
  );
};

export default Timetable;
