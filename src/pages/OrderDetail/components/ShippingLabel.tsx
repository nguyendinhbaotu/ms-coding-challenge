import React, { useState } from "react";
import styled from "styled-components";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const ShippingLabelContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;

  .shipping-address {
    margin-bottom: 5px;
  }
`;

const ShippingLabel: React.FC = () => {
  return (
    <ShippingLabelContainer>
      <Button label="SUBSCRIPTION_ORDER" className="p-button-sm p-button-secondary p-button-rounded" disabled/>
      <Button label="PAID" className="p-button-sm p-button-secondary p-button-rounded" disabled/>
      <Button label="UNFULFILLED" className="p-button-sm p-button-secondary p-button-rounded" disabled/>
    </ShippingLabelContainer>
  );
};

export default ShippingLabel;
