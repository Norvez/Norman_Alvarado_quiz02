import React, { useContext } from "react";
import MyContext from "../context/MyContext";

const Content = ({ step }: { step: number }) => {
  const { products } = useContext(MyContext);

  let filteredProducts: Product[] = [];

  if (step === 1 || step === 2 || step === 3) {
    filteredProducts = products.filter(product => product.step === step);
  } else {
    filteredProducts = products;
  }

  return (
    <div className='card'>
      {filteredProducts.map(product => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Content;