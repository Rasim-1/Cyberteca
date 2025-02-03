import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null); // Для хранения текущего редактируемого продукта
  const [newProduct, setNewProduct] = useState({
    category: '',
    name: '',
    size: '',
    resolution: '',
    refresh_rate: '',
    features: [],
    price: '',
    image: ''
  });

  // Получение продуктов с сервера
  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  // Добавление нового продукта
  const addProduct = () => {
    fetch('http://localhost:5000/product', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    })
      .then(response => response.json())
      .then(product => {
        setProducts(prev => [...prev, product]);
        setNewProduct({
          category: '',
          name: '',
          size: '',
          resolution: '',
          refresh_rate: '',
          features: [],
          price: '',
          image: ''
        }); // Очистить форму после добавления
      });
  };

  // Обновление продукта
  const updateProduct = () => {
    fetch(`http://localhost:5000/product/${editingProduct.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingProduct),
    })
      .then(response => response.json())
      .then(updatedProduct => {
        setProducts(prev => prev.map(product =>
          product.id === updatedProduct.id ? updatedProduct : product
        ));
        setEditingProduct(null); // Закрыть форму редактирования
      });
  };

  // Удаление продукта
  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/product/${id}`, { method: 'DELETE' })
      .then(() => setProducts(prev => prev.filter(product => product.id !== id)));
  };

  // Редактирование продукта (открыть форму)
  const handleEdit = (product) => {
    setEditingProduct({ ...product });
  };

  // Обработчик изменения данных в форме
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editingProduct) {
      setEditingProduct((prev) => ({
        ...prev,
        [name]: value
      }));
    } else {
      setNewProduct((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      
      {/* Форма для добавления нового продукта */}
      <h2>Add New Product</h2>
      <input
        type="text"
        name="name"
        value={newProduct.name}
        onChange={handleChange}
        placeholder="Product Name"
      />
      <input
        type="text"
        name="category"
        value={newProduct.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <input
        type="text"
        name="size"
        value={newProduct.size}
        onChange={handleChange}
        placeholder="Size"
      />
      <input
        type="text"
        name="resolution"
        value={newProduct.resolution}
        onChange={handleChange}
        placeholder="Resolution"
      />
      <input
        type="text"
        name="refresh_rate"
        value={newProduct.refresh_rate}
        onChange={handleChange}
        placeholder="Refresh Rate"
      />
      <input
        type="text"
        name="price"
        value={newProduct.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <input
        type="text"
        name="image"
        value={newProduct.image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <button onClick={addProduct}>Add Product</button>

      {/* Редактирование существующего продукта */}
      {editingProduct && (
        <>
          <h2>Edit Product</h2>
          <input
            type="text"
            name="name"
            value={editingProduct.name}
            onChange={handleChange}
            placeholder="Product Name"
          />
          <input
            type="text"
            name="category"
            value={editingProduct.category}
            onChange={handleChange}
            placeholder="Category"
          />
          <input
            type="text"
            name="size"
            value={editingProduct.size}
            onChange={handleChange}
            placeholder="Size"
          />
          <input
            type="text"
            name="resolution"
            value={editingProduct.resolution}
            onChange={handleChange}
            placeholder="Resolution"
          />
          <input
            type="text"
            name="refresh_rate"
            value={editingProduct.refresh_rate}
            onChange={handleChange}
            placeholder="Refresh Rate"
          />
          <input
            type="text"
            name="price"
            value={editingProduct.price}
            onChange={handleChange}
            placeholder="Price"
          />
          <input
            type="text"
            name="image"
            value={editingProduct.image}
            onChange={handleChange}
            placeholder="Image URL"
          />
          <button onClick={updateProduct}>Update Product</button>
        </>
      )}

      {/* Список продуктов с кнопками для редактирования и удаления */}
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
