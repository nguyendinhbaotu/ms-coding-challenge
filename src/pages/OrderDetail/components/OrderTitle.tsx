import React from "react";
import styled from "styled-components";

const OrderTitleContainer = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    padding-top: 20px;

    .order-title {
        .order-lable {
            font-weight: bold;
        }
    }

    .order-dates {
        display: flex;
        flex-direction: column;
        margin-left: auto;  
    }
`;

const OrderTitle: React.FC = () => (
  <OrderTitleContainer>
    <div className="order-title">
        <span><strong>Order </strong></span>
        <span>US5426899</span>
    </div>
    <div className="order-dates">
        <span>Created on Mar 6th 2021</span>
        <span>Last updated on Mar 6th 2021</span>
    </div>
  </OrderTitleContainer>
);

export default OrderTitle;
