import React from 'react';

const Chapel = () => {
  return (
    <div className="chapel-wrapper content-box">
      <div className="chapel-header header">
        <p className="title">채플 진행도</p>
      </div>
      <hr></hr>
      <div className="chapel-content">
        <input value="52" min="1" max="100" type="range" readOnly />
        <progress value="73" max="100"></progress>
        <div className="text">
          <span>📘 개강</span>
          <span>종강 🏆</span>
        </div>
        <div className="progress">
          <p>
            <span>참석률</span>
            <span>52%</span>
          </p>
          <p>
            <span>전체 진행률</span>
            <span>73%</span>
          </p>
        </div>
        <div className="chance-times">
          <p>
            <span>결석 가능 횟수:</span>
            <span>3회</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chapel;
