import React from "react";
import styled from "styled-components";
import OrderTitle from "../OrderDetail/components/OrderTitle";
import ProductCard from "../OrderDetail/components/ProductCard";

const OrderDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    padding-right: 50px;
`
const OrderDetail: React.FC = () => (
    <OrderDetailContainer>
        <OrderTitle/>
        <ProductCard editMode={true}/>
    </OrderDetailContainer>
);

export default OrderDetail;
