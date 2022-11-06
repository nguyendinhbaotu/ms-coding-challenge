import React from "react";
import OrderTitle from "./components/OrderTitle";
import ProductCard from "./components/ProductCard";
import styled from "styled-components";

const OrderDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    padding-right: 50px;
`

const OrderDetail: React.FC = () => (
    <OrderDetailContainer>
        <OrderTitle/>
        <ProductCard editMode={false}/>
    </OrderDetailContainer>
);

export default OrderDetail;
