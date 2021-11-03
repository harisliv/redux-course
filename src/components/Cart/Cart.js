import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartProducts = useSelector((state) => state.product.products);
  // console.log("cart.js");
  // console.log(cartProducts);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartProducts.map((item) => (
          <CartItem
            key={Math.floor(Math.random() * 10000)}
            item={{
              id: item.id,
              title: item.title,
              price: item.price,
              quantity: item.quantity,
              total: item.total,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
