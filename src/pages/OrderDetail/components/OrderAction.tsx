import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const OrderActionContainer = styled.div`
  border-top: 1px solid gray;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 20px;
`;

const OrderAction: React.FC = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogContent, setDialogContent] = useState("");

  const onClick = (content: string) => {
    setDialogContent(content);
    setDialogVisible(true);
  };
  const onHide = () => {
    setDialogVisible(false);
  };
  const renderFooter = () => {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={() => onHide()}
          className="p-button-text"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          onClick={() => onHide()}
          autoFocus
        />
      </div>
    );
  };
  return (
    <OrderActionContainer>
      <Dialog
        header={dialogContent}
        visible={dialogVisible}
        style={{ width: "50vw" }}
        footer={renderFooter()}
        onHide={() => onHide()}
      >
        <span>This is dialog for button {dialogContent}</span> <br/>
        <input></input>
      </Dialog>
      <Button label="Cancel" onClick={() => onClick("Cancel")} />
      <Button label="Refund" onClick={() => onClick("Refund")} />
      <Button label="Resend Confirmation" onClick={() => onClick("Resend Confirmation")} />
      <Button label="Resend Tracking" onClick={() => onClick("Resend Tracking")}/>
    </OrderActionContainer>
  );
};

export default OrderAction;
