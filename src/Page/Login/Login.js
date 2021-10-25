import { useState } from 'react';
import classes from './Login.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/action';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const onClick = () => {
    dispatch(loginUser(data));
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Box}>
        <h1>Login:</h1>
        <input
          onChange={e => handleChange(e)}
          className={classes.Input}
          type="email"
          name="email"
          placeholder={'E-mail'}
        />
        {store.error.email ? (
          <div className={classes.errorBoxEmail}>
            {store.error.email}
          </div>
        ) : null}

        <input
          onChange={e => handleChange(e)}
          className={classes.Input}
          type="Password"
          name="password"
          placeholder={'Password'}
        />
        {store.error.password ? (
          <div className={classes.errorBoxPassword}>
            {store.error.password}
          </div>
        ) : null}

        <button onClick={onClick} className={classes.Btn}>
          Log in
        </button>
        <p>
          You dont have account? Then go to{' '}
          <Link style={{ textDecoration: 'none' }} to={'/Register'}>
            Sign up
          </Link>{' '}
          page!
        </p>
      </div>
    </div>
  );
};

export default Login;
