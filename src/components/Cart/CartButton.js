import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartButton = () => {
  const dispatch = useDispatch();
  // const show = useSelector((state) => state.cart.showCart);
  const totalQuantity = useSelector(state => state.product.totalQuantity)
  const toggleCartHandler = () => {
    dispatch(cartActions.toggle())
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
