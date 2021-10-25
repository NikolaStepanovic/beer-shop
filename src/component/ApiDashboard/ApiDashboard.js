import { useState, useEffect } from 'react';
import classes from './ApiDashboard.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeItem } from '../../store/action';

const ApiDashboard = () => {
  const [cartData, setCartData] = useState({
    id: null,
  });

  const store = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToCart(cartData));
  }, [dispatch, cartData]);

  const data = store.apiData;

  return (
    <div className={classes.Box}>
      {data.map(el => (
        <div className={classes.Container} key={el.id}>
          <Link to={`/Beer/${el.id}`} className={classes.h3}>
            {el.name}
          </Link>
          <p>{el.first_brewed}</p>
          <img
            className={classes.image}
            src={el.image_url}
            alt={''}
          ></img>
          <p>
            {el.volume.value} {el.volume.unit}
          </p>
          <p>Price : {el.ebc} e </p>
          {store.cart.find(data => data.id === el.id) ? (
            <button
              onClick={() => dispatch(removeItem(el.id))}
              className={classes.Btn1}
            >
              Remove from cart
            </button>
          ) : (
            <button
              onClick={() =>
                setCartData({
                  id: el.id,
                  price: el.ebc,
                  image: el.image_url,
                  name: el.name,
                  value: 1,
                  totalPrice: el.ebc,
                })
              }
              className={classes.Btn}
            >
              Add to cart
            </button>
          )}
          <div className={classes.ingredients}>
            {el.ingredients.malt.map((el, i) => (
              <div className={classes.eachIngredient} key={i}>
                {el.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApiDashboard;
