import React, { useState } from 'react';
import { Table, Button, Input, Select, Modal } from 'antd';
import { useProductContext } from '../context/ProductContext';
import EditProductModal from './EditProductModal';
import './edit.css'

const { Option } = Select;

const ProductList: React.FC = () => {
  const { products, deleteProduct } = useProductContext();
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this product?',
      onOk: () => deleteProduct(id),
    });
  };

  const filteredProducts = products.filter(product => {
    return (
      (searchText === '' || product.name.includes(searchText) || product.description.includes(searchText)) &&
      (selectedCategory === undefined || product.category === selectedCategory)
    );
  });

  return (
    <div className='input-container'>
      <Input className='input'
        placeholder="Search by name or description"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        style={{ marginBottom: 16, width: 200 }}
      />
      <Select
        placeholder="Filter by category"
        className='input'
        value={selectedCategory}
        onChange={value => setSelectedCategory(value)}
        style={{ marginBottom: 16, width: 200 }}
      >
        <Option value="Electronics">Electronics</Option>
        <Option value="Books">Books</Option>
        <Option value="Clothing">Clothing</Option>
      </Select>
      <Button type="primary" style={{ marginBottom: 16 }} onClick={() => window.location.href = '/add-product'}>
        Add Product
      </Button>
      <Table   className='product-details1' dataSource={filteredProducts} rowKey="id">
        <Table.Column  className="details" title="Category" dataIndex="category" key="category" />
        <Table.Column  className="details" title="Name" dataIndex="name" key="name" />
        <Table.Column  className="details" title="Description" dataIndex="description" key="description" />
        <Table.Column  className="details" title="Price" dataIndex="price" key="price" />
        <Table.Column  className="details" 
          title="Actions"
          key="actions"
          render={(text, record: any) => (
            <>
              <Button type="link" onClick={() => setEditingProduct(record)}>Edit</Button>
              <Button type="link" danger onClick={() => handleDelete(record.id)}>Delete</Button>
            </>
          )}
        />
      </Table>
      {editingProduct && (
        <EditProductModal
          visible={!!editingProduct}
          onClose={() => setEditingProduct(null)}
          product={editingProduct}
        />
      )}
    </div>
  );
};

export default ProductList;
