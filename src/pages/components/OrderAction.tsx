import React, { useState } from "react";
import styled from "styled-components";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const OrderActionContainer = styled.div`
  border-top: 1px solid gray;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 20px;
`;

const OrderAction: React.FC = () => {
  return (
    <OrderActionContainer>
      <Button label="Cancel" />
      <Button label="Refund" />
      <Button label="Resend Confirmation" />
      <Button label="Resend Tracking" />
    </OrderActionContainer>
  );
};

export default OrderAction;
