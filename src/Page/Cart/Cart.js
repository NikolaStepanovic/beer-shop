import classes from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, order } from '../../store/action';
import Header from '../../component/goBackHeader/GoBackHeader';

const Cart = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const array = store.cart.map(el =>
    el.id != null ? el.totalPrice : 0
  );

  const result =
    array.length !== 0
      ? array.reduce(
          (previousValue, currentValue) =>
            previousValue + currentValue
        )
      : 0;

  const orderHandler = () => {
    console.log(result);
    dispatch(order([]));
  };

  return (
    <div className={classes.Box}>
      <Header />
      {store.cart.map((el, i) =>
        el.id != null ? (
          <div key={i} className={classes.Container}>
            <div className={classes.ContainerLeft}>
              <h2 className={classes.h2}>{el.name}</h2>
              <img
                className={classes.image}
                src={el.image}
                alt={''}
              />
              <p className={classes.p}>Price: {el.price}</p>
            </div>
            <div className={classes.ContainerRight}>
              <button
                onClick={() => dispatch(decrement(el.id))}
                className={classes.Btn}
              >
                -
              </button>
              <p className={classes.p1}>{el.value}</p>
              <button
                onClick={() => dispatch(increment(el.id))}
                className={classes.Btn}
              >
                +
              </button>
              <p className={classes.p2}>
                Total Price: {el.totalPrice}
              </p>
            </div>
          </div>
        ) : null
      )}
      <div className={classes.totalPrice}>
        <p className={classes.p3}>Total: {result}</p>
        <button onClick={orderHandler} className={classes.Btn1}>
          Order Now!
        </button>
      </div>
    </div>
  );
};

export default Cart;
