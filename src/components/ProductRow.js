function ProductRow({ product }) {
  return (
    <tr>
      <th style={{ color: product.inStock ? 'black' : 'red' }}>
        {product.name}
      </th>
      <th>{product.price}</th>
    </tr>
  );
}

export default ProductRow;
