import classes from './HomeHeader.module.css';
import { NavLink } from 'react-router-dom';

const HomeHeader = () => {
  return (
    <div className={classes.Box}>
      <NavLink className={classes.Btn} exact to={`/Login`}>
        Login
      </NavLink>
      <NavLink className={classes.Btn} to={`/Register`}>
        Register
      </NavLink>
    </div>
  );
};

export default HomeHeader;
