import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const dummy = [
    {
      id: 1,
      title: "test",
      price: 6,
      description: "descr",
      quantity: 1
    },
    {
      id: 2,
      title: "test2",
      price: 61,
      description: "descr1231",
      quantity: 1
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy.map((item) => (
          <ProductItem
            key={Math.floor(Math.random()*10000)}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
