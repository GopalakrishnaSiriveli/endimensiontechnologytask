import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { useProductContext } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import './edit.css'

const { Option } = Select;

const AddProductForm: React.FC = () => {
  const { addProduct } = useProductContext();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    const newProduct = {
      id: Date.now(),
      ...values,
    };
    addProduct(newProduct);
    navigate('/');
  };

  return (
    <Form  className='product-details' form={form} onFinish={handleSubmit}>
      <Form.Item name="category" label="Category" rules={[{ required: true, message: 'Please select a category' }]}>
        <Select placeholder="Select a category">
          <Option value="Electronics">Electronics</Option>
          <Option value="Clothing">Clothing</Option>
          <Option value="Books">Books</Option>
        </Select>
      </Form.Item>
      <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter the product name' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter a description' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="price" label="Price" rules={[{ required: true, message: 'Please enter the price' }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Add Product</Button>
      </Form.Item>
    </Form>
  );
};

export default AddProductForm;
