import classes from './Pagination.module.css';
import { Link, useLocation } from 'react-router-dom';
import { fetchApi } from '../../store/action';
import queryString from 'query-string';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentPage } from '../../store/action';

const Pagination = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const { page = 1 } = queryString.parse(search);

  useEffect(() => {
    dispatch(fetchApi(page));
    dispatch(currentPage(page));
  }, [dispatch, page]);

  return (
    <div className={classes.Box}>
      <Link
        to={`/Dashboard?page=${+page > 1 ? page - 1 : 1}`}
        className={classes.Btn}
      >
        Prev
      </Link>
      <p className={classes.p}>{page}</p>
      <Link
        to={`/Dashboard?page=${page < 33 ? +page + 1 : 33} `}
        className={classes.Btn}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
