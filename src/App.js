import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { cartActions } from "./store/cart-slice";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/product-slice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.product);
  const notification = useSelector((state) => state.cart.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial=false;
      return;
    }

    dispatch(sendCartData(cart))
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
