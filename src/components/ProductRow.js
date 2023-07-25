function ProductRow(props) {
  console.log(props.product.inStock);
  return (
    <tr>
      <th style={{ color: props.product.inStock ? 'black' : 'red' }}>
        {props.product.name}
      </th>
      <th>{props.product.price}</th>
    </tr>
  );
}

export default ProductRow;
