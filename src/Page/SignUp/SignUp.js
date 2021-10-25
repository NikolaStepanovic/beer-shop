import { useState } from 'react';
import classes from './SignUp.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/action';
import { regEmail, regNumber } from '../../units/units';

const SignUp = () => {
  const [data, setData] = useState({
    username: null,
    email: null,
    password: null,
    password2: null,
  });

  const [error, setError] = useState({
    username: null,
    email: null,
    password: null,
    password2: null,
  });

  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const validateFild = (value, name) => {
    if (
      name === 'username' &&
      value.length !== 0 &&
      value.length < 6
    ) {
      return 'Username must be 6 characters long!';
    }
    if (
      name === 'email' &&
      value.length !== 0 &&
      !regEmail.test(value)
    )
      return 'Email is not valid!';
    if (
      name === 'password' &&
      value.length !== 0 &&
      !regNumber.test(value)
    )
      return 'Password must have min 3 character, 1 uppercase and 1 lowercase';
    if (
      name === 'password2' &&
      value.length !== 0 &&
      value !== data.password
    )
      return 'Password dont match!';
    return null;
  };

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    const errMessage = validateFild(value, name);
    setError({ ...error, [name]: errMessage });
    setData({ ...data, [name]: value });
  };

  const onClick = () => {
    dispatch(registerUser(data));
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Box}>
        <h1>Sign Up:</h1>
        {store.error.register ? (
          <div className={classes.errorBox}>{store.error.register}</div>
        ) : null}
        <input
          onChange={e => handleChange(e)}
          className={classes.Input}
          type="text"
          name="username"
          placeholder={'Username'}
        />

        {error.username ? (
          <label className={classes.errorBoxUsername}>
            {error.username}
          </label>
        ) : null}

        <input
          onChange={e => handleChange(e)}
          className={classes.Input}
          type="email"
          name="email"
          placeholder={'E-mail'}
        />

        {error.email ? (
          <label className={classes.errorBoxEmail}>
            {error.email}
          </label>
        ) : null}

        <input
          onChange={e => handleChange(e)}
          className={classes.Input}
          type="Password"
          name="password"
          placeholder={'Password'}
        />

        {error.password ? (
          <label className={classes.errorBoxPassword}>
            {error.password}
          </label>
        ) : null}

        <input
          onChange={e => handleChange(e)}
          className={classes.Input}
          type="Password"
          name="password2"
          placeholder={'Password'}
        />
        {error.password2 ? (
          <label className={classes.errorBoxPassword2}>
            {error.password2}
          </label>
        ) : null}

        <button
          disabled={
            data.username &&
            !error.username &&
            data.email &&
            !error.email &&
            data.password &&
            !error.password &&
            data.password2 &&
            !error.password2
              ? false
              : true
          }
          onClick={e => onClick(e)}
          className={classes.Btn}
        >
          Sing up
        </button>
        <p className={classes.p}>
          You have account?Then go to{' '}
          <Link style={{ textDecoration: 'none' }} to={'/Login'}>
            Login
          </Link>{' '}
          page!
        </p>
      </div>
    </div>
  );
};

export default SignUp;
