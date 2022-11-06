import React, { useState } from "react";
import styled from "styled-components";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const ShippingInformationContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  .shipping-address {
    margin-bottom: 5px;
  }
`;

const ShippingInformation: React.FC = () => {
  return (
    <ShippingInformationContainer>
        <h3 className="shipping-address"><strong>SHIPPING ADDRESS</strong></h3>
        <span>Ryan Fralick</span>
        <span>1489 DESERT SPRINGS AVE</span>
        <span>RICHLAND, Washington 99352</span>
        <span>United States</span>
    </ShippingInformationContainer>
  );
};

export default ShippingInformation;
