import React, { useState } from "react";
import styled from "styled-components";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ShippingInformation from "./ShippingInformation";
import ShippingLabel from "./ShippingLabel";
import OrderAction from "./OrderAction";

const ProductCardContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px;
  margin-top: 20px;

  .product-table {
    flex-grow: 1;
  }

  .product-summary {
    display: flex;
    .product-total {
      margin-left: auto;
    }
  }
`;

const ProductCard: React.FC = () => {
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
  const imageBodyTemplate = (rowData: { icon: string | undefined }) => {
    console.log(rowData);
    return rowData.icon === null ? (
      <span>
        {" "}
        <strong> Total: </strong>{" "}
      </span>
    ) : (
      <img
        src={rowData.icon}
        onError={(e: any) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        width="100px"
        alt={rowData.icon}
        className="product-image"
      />
    );
  };
  return (
    <ProductCardContainer>
      <DataTable
        className="product-table"
        value={products}
        responsiveLayout="scroll"
      >
        <Column body={imageBodyTemplate}></Column>
        <Column field="name" header="PRODUCT"></Column>
        <Column field="quantity" header="QUANTITY"></Column>
        <Column field="price" header="PRICE"></Column>
      </DataTable>
      <ShippingInformation />
      <ShippingLabel />
      <OrderAction />
    </ProductCardContainer>
  );
};

export default ProductCard;
