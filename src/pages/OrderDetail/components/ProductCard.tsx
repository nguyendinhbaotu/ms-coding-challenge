import React from "react";
import styled from "styled-components";
import ShippingInformation from "./ShippingInformation";
import ShippingLabel from "./ShippingLabel";
import OrderAction from "./OrderAction";
import ProductTable from "../../../shared/components/ProductTable";

const ProductCardContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px;
  margin-top: 20px;
`;

const ProductCard: React.FC<{ editMode: boolean }> = (props) => {
  const { editMode } = props;
  return (
    <ProductCardContainer>
      <ProductTable editMode={editMode}></ProductTable>
      <ShippingInformation />
      <ShippingLabel />
      <OrderAction />
    </ProductCardContainer>
  );
};

export default ProductCard;
