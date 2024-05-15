import React from 'react';
import { Modal, Form, Input, Button, Select } from 'antd';
import { useProductContext } from '../context/ProductContext';
import './edit.css'

const { Option } = Select;

interface EditProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: any;
}

const EditProductModal: React.FC<EditProductModalProps> = ({ visible, onClose, product }) => {
  const { updateProduct } = useProductContext();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    updateProduct({ ...product, ...values });
    onClose();
  };

  return (
    <Modal visible={visible} onCancel={onClose} footer={null}>
      <Form form={form} initialValues={product} onFinish={onFinish}>
        <Form.Item name="category" label="Category" rules={[{ required: true }]}>
          <Select  className='input' placeholder="Select a category">
            <Option value="Electronics">Electronics</Option>
            <Option value="Books">Books</Option>
            <Option value="Clothing">Clothing</Option>
          </Select>
        </Form.Item>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Price" rules={[{ required: true, type: 'number', min: 0 }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Update Product</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditProductModal;
