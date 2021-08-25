import { Link } from 'react-router-dom';

import SideBar from '../components/SideBar';

export const Home = () => {
  return (
    <>
      <div className="body-wrapper">
        <SideBar />
        <div className="content-wrapper"></div>
      </div>
    </>
  );
};

export const Ask = () => {
  return (
    <>
      <div className="body-wrapper">
        <SideBar />
        <div className="content-wrapper"></div>
      </div>
    </>
  );
};

export const NotFound = () => {
  return (
    <>
      <div className="article-list">
        <h1>Hi from notfound</h1>
        <ul>
          <li>
            <Link to="/lectures">lectures</Link>
          </li>
          <li>
            <Link to="/timetable">timetable</Link>
          </li>
          <li>
            <Link to="/chapel">chapel</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
