import React from "react";
import ProductRow from "./ProductRow";

const ProductCategory = props => {
  const itemList = props.list.map((el, index) => {
    return <ProductRow item={el} key={index} />;
  });
  return (
    <React.Fragment>
      <tr className="row">
        <td className="product-category thead-light">
          <h3>{props.categoryName}</h3>
        </td>
      </tr>
      {itemList}
    </React.Fragment>
  );
};

export default ProductCategory;
