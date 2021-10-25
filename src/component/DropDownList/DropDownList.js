import classes from './DropDownList.module.css';
import { useDispatch } from 'react-redux';
import { loginUserFail } from '../../store/action';
import { Link } from 'react-router-dom';

const DropDown = props => {
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem('token');
    dispatch(loginUserFail(null, null));
  };
  return (
    <div onMouseLeave={props.close} className={classes.Box}>
      <Link to={'/Cart'} className={classes.Btn1}>Cart</Link>
      <button onClick={logOut} className={classes.Btn}>
        Log out
      </button>
    </div>
  );
};

export default DropDown;
