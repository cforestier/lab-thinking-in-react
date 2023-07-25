import { useState } from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Prix</th>
      </tr>
      {props.products.map((product) => {
        return <ProductRow product={product} />;
      })}
    </table>
  );
}

export default ProductTable;
