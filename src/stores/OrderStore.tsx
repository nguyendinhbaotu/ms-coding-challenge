import React, { ReactNode, useState } from "react";

interface Props {
  children?: ReactNode;
}
export interface OrderState {
  products: any[];
  setProducts: Function;
}
export const OrderContext = React.createContext<OrderState>({
  products: [],
  setProducts: () => {},
});

export const OrderProvider = ({ children }: Props) => {
  const [products, setProducts] = useState([
    {
      icon: "https://www.primefaces.org/primereact/images/product/bamboo-watch.jpg",
      name: "Product 1",
      quantity: 2,
      price: "$17.98",
    },
    {
      icon: "https://www.primefaces.org/primereact/images/product/black-watch.jpg",
      name: "Product 2",
      quantity: 1,
      price: "$14.99",
    },
    { icon: null, name: null, quantity: null, price: "$32.97" },
  ]);

  return (
    <OrderContext.Provider value={{ products, setProducts }}>
      {children}
    </OrderContext.Provider>
  );
};
