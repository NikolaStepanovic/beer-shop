import './App.css';
import Login from './Page/Login/Login';
import SignUp from './Page/SignUp/SignUp';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './Page/Home/Home';
import Dashboard from './Page/Dashboard/Dashboard';
import EachApiFetch from './component/eachApiFetch/eachApiFetch';
import { useSelector } from 'react-redux';
import Cart from './Page/Cart/Cart';

function App() {
  const store = useSelector(state => state);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/Login">
          {localStorage.getItem('token') ? (
            <Redirect to={'/Dashboard'}>
              <Dashboard />
            </Redirect>
          ) : (
            <Login />
          )}
        </Route>

        <Route path="/Register">
          {store.registerAuth ? (
            <Redirect to={'/Login'}>
              <Login />
            </Redirect>
          ) : (
            <SignUp />
          )}
        </Route>
        <Route path="/Dashboard">
          {!localStorage.getItem('token') ? (
            <Redirect to={'/'}>
              <HomePage />
            </Redirect>
          ) : (
            <Dashboard />
          )}
        </Route>
        <Route path="/Beer/:id">
          {localStorage.getItem('token') ? (
            <EachApiFetch />
          ) : (
            <Redirect to={'/'}>
              <HomePage />
            </Redirect>
          )}
        </Route>
        <Route path="/Cart">
          {localStorage.getItem('token') ? (
            <Cart />
          ) : (
            <Redirect to={'/'}>
              <HomePage />
            </Redirect>
          )}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
