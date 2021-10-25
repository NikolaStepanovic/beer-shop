import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './eachApiFetch.module.css';
import { fetchSingleApi } from '../../store/action';
import { useParams } from 'react-router-dom';
import Header from '../../component/goBackHeader/GoBackHeader';

const EachApiFetch = () => {
  let { id } = useParams();

  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const data = store.singleApiData;

  useEffect(() => {
    dispatch(fetchSingleApi(id));
  }, [dispatch, id]);

  return (
    <div className={classes.Box}>
      <Header />
      <div className={classes.Container}>
        <img className={classes.Image} src={data.image_url} alt={''}/>
        <div className={classes.ContainerLeft}>
          <h1>{data.name}</h1>
          <p className={classes.p}>
            Attenuation level: {data.attenuation_level}
          </p>
          <p className={classes.p}>
            Brewers tips: {data.brewers_tips}
          </p>
          <p className={classes.p}>
            Contributed by: {data.contributed_by}
          </p>
          <p className={classes.p}>Description: {data.description}</p>
          <p className={classes.p}>Price: {data.ebc}</p>
          <p className={classes.p}>
            First brewed: {data.first_brewed}
          </p>
          <p className={classes.p}>Tagline: {data.tagline}</p>
          <p className={classes.p}>
            {data.volume?.value} {data.volume?.unit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EachApiFetch;
