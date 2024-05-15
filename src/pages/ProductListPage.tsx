import React from 'react';
import ProductList from '../components/ProductList';
import Statistics from '../components/Statistics';
import './Product.css'

const ProductListPage: React.FC = () => {
  return (
    <div className="container">
      <h1 className='heading'>Product List</h1>
      <Statistics />
      <ProductList />
    </div>
  );
};

export default ProductListPage;
