import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const cartHandler = () => {
    dispatch(uiActions.toggleCart());
  };
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.totalQuantity}</span>
    </button>
  );
};

export default CartButton;
