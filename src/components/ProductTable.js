import { useState } from 'react';
import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Prix</th>
      </tr>
      {products.map((product, index) => {
        return <ProductRow product={product} key={`product ${index}`} />;
      })}
    </table>
  );
}

export default ProductTable;
