import { Link } from 'react-router-dom';
import Chapel from '../components/Chapel';
import Lectures from '../components/Lectures';

import SideBar from '../components/SideBar';
import Timetable from '../components/Timetable';

export const Home = () => {
  return (
    <>
      <div className="body-wrapper">
        <SideBar />
        <div className="content-wrapper">
          <div className="content-header">
            <button className="update">UPDATE</button>
          </div>
          <div className="content-box-wrapper">
            <Chapel />
            <Timetable />
            <Lectures />
          </div>
        </div>
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
        <h1>Page Not Found</h1>
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
