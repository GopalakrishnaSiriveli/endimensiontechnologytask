import React from 'react';
import { useProductContext } from '../context/ProductContext';
import './Statistics.css'

const Statistics: React.FC = () => {
  const { products } = useProductContext();
  const uniqueCategories = [...new Set(products.map(product => product.category))];

  return (
    <div>
      <p className="para">Total Products: {products.length}</p>
      <p className="para">Unique Categories: {uniqueCategories.length}</p>
    </div>
  );
};

export default Statistics;
