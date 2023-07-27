import { useState } from 'react';
import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => {
          return <ProductRow product={product} key={`product ${index}`} />;
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;
