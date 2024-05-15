import React from 'react';
import AddProductForm from '../components/AddProductForm';
import './Product.css'

const AddProductPage: React.FC = () => {
  return (
    <div className='add-product'>
      <h1 className='heading'>Add Product</h1>
      <AddProductForm />
    </div>
  );
};

export default AddProductPage;
