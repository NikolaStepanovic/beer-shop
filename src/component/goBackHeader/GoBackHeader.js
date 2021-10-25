import classes from './GoBackHeader.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GoBackHeader = () => {
  const store = useSelector(state => state);

  let id = store.currentPage;

  return (
    <div className={classes.Box}>
      <Link to={`/Dashboard?page=${id}`} className={classes.Btn}>
        Go back
      </Link>
    </div>
  );
};

export default GoBackHeader;
