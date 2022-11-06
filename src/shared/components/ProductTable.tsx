import React, { useContext } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { OrderContext, OrderState } from "../../stores/OrderStore";

const ProductTable: React.FC<{ editMode: boolean }> = (props) => {
  const { editMode } = props;
  const { products } = useContext<OrderState>(OrderContext);
  const cellEditor = (options: any) => {
    if (options.field === "price") return priceEditor(options);
    else return textEditor(options);
  };
  const priceEditor = (options: any) => {
    return (
      <InputNumber
        value={options.value}
        onValueChange={(e) => options.editorCallback(e.value)}
        mode="currency"
        currency="USD"
        locale="en-US"
      />
    );
  };

  const textEditor = (options: any) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const isPositiveInteger = (val: string) => {
    let str = String(val);
    str = str.trim();
    if (!str) {
      return false;
    }
    str = str.replace(/^0+/, "") || "0";
    let n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
  };

  const onCellEditComplete = (e: any) => {
    let { rowData, newValue, field, originalEvent: event } = e;

    switch (field) {
      case "quantity":
      case "price":
        if (isPositiveInteger(newValue)) rowData[field] = newValue;
        else event.preventDefault();
        break;

      default:
        if (newValue.trim().length > 0) rowData[field] = newValue;
        else event.preventDefault();
        break;
    }
  };

  const imageBodyTemplate = (rowData: { icon: string | undefined }) => {
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
    <DataTable
      className="product-table"
      value={products}
      responsiveLayout="scroll"
      editMode={editMode ? "cell" : ""}
    >
      <Column body={imageBodyTemplate}></Column>
      <Column
        field="name"
        header="PRODUCT"
        editor={(options) => cellEditor(options)}
        onCellEditComplete={onCellEditComplete}
      ></Column>
      <Column field="quantity" header="QUANTITY"></Column>
      <Column field="price" header="PRICE"></Column>
    </DataTable>
  );
};

export default ProductTable;
