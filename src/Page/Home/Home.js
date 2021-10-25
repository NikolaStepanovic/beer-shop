import classes from './Home.module.css';
import image from '../../assets/Drinks.jpeg';
import Header from '../../component/HomeHeader/HomeHeader';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={classes.Box}>
      <Header />
      <img className={classes.Img} src={image} alt={''} />
      <p className={classes.p}>
        If you want to see our range of drinks, you must first{' '}
        <Link style={{textDecoration:'none'}} to={'/Login'}>log in</Link>!
      </p>
    </div>
  );
};

export default Home;
