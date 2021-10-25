import { useState } from 'react';
import classes from './DashboardHeader.module.css';
import image from '../../assets/LiqudHeader.jpg';
import DropDownList from '../DropDownList/DropDownList';
import jwt_decode from 'jwt-decode';

const DashboardHeader = () => {
  const [show, setShow] = useState(false);

  const token = localStorage.getItem('token');
  const decoded = jwt_decode(token);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className={classes.Box}>
      <img className={classes.image} src={image} alt="" />
      <p className={classes.p}>Welcome {decoded.username}!</p>
      <button
        onMouseEnter={() => setShow(true)}
        className={classes.Btn}
      >
        Menu
      </button>
      {show ? <DropDownList close={handleClose} /> : null}
    </div>
  );
};

export default DashboardHeader;
