import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [productsInStock, setProductsInStock] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(
      e.target.value.charAt(0).toUpperCase() +
        e.target.value.slice(1).toLowerCase()
    );
    const filteredProduct = products.filter((item) => {
      return item.name.includes(searchQuery);
    });
    setFilteredProducts(filteredProduct);
  };

  const areProductsInStock = () => {
    let eachProductInStock = [];
    products.forEach((product) => {
      if (product.inStock) {
        eachProductInStock.push(product);
      }
    });
    setProductsInStock(eachProductInStock);
  };

  window.addEventListener('load', (event) => {
    areProductsInStock();
  });
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar value={searchQuery} onSearch={handleSearch} />
      <ProductTable
        products={searchQuery.length > 0 ? filteredProducts : products}
        inStock={productsInStock}
      />
    </div>
  );
}

export default ProductsPage;
