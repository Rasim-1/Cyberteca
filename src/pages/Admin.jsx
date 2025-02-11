import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    category: 'Keyboard',
    name: '',
    size: '',
    resolution: '',
    refresh_rate: '',
    features: [],
    price: '',
    image: '',
  });

  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert("Пожалуйста, заполните все обязательные поля: Название, Цена, Картинка.");
      return;
    }

    fetch('http://localhost:5000/product', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    })
      .then(response => response.json())
      .then(product => {
        setProducts(prev => [...prev, product]);
        setNewProduct({
          category: 'Keyboard',
          name: '',
          size: '',
          resolution: '',
          refresh_rate: '',
          features: [],
          price: '',
          image: '',
        });
      });
  };

  const updateProduct = () => {
    if (!editingProduct.name || !editingProduct.price || !editingProduct.image) {
      alert("Пожалуйста, заполните все обязательные поля: Название, Цена, Картинка.");
      return;
    }

    fetch(`http://localhost:5000/product/${editingProduct.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingProduct),
    })
      .then(response => response.json())
      .then(updatedProduct => {
        setProducts(prev =>
          prev.map(product =>
            product.id === updatedProduct.id ? updatedProduct : product
          )
        );
        setEditingProduct(null);
      });
  };

  const deleteProduct = id => {
    fetch(`http://localhost:5000/product/${id}`, { method: 'DELETE' }).then(() =>
      setProducts(prev => prev.filter(product => product.id !== id))
    );
  };

  const handleEdit = product => {
    setEditingProduct({ ...product });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (editingProduct) {
      setEditingProduct(prev => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setNewProduct(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>

      <h2>Add New Product</h2>
      <div className="form">
        <input type="text" name="name" value={newProduct.name} onChange={handleChange} placeholder="Product Name" required />
        <select name="category" value={newProduct.category} onChange={handleChange}>
          <option value="Keyboard">Keyboard</option>
          <option value="Mouse">Mouse</option>
          <option value="PCBlock">PCBlock</option>
          <option value="Monitor">Monitor</option>
        </select>
        <input type="text" name="size" value={newProduct.size} onChange={handleChange} placeholder="Size" />
        <input type="text" name="resolution" value={newProduct.resolution} onChange={handleChange} placeholder="Resolution" />
        <input type="text" name="refresh_rate" value={newProduct.refresh_rate} onChange={handleChange} placeholder="Refresh Rate" />
        <input type="text" name="price" value={newProduct.price} onChange={handleChange} placeholder="Price" required />
        <input type="text" name="image" value={newProduct.image} onChange={handleChange} placeholder="Image URL" required />
        <button onClick={addProduct} className="btn">Add Product</button>
      </div>

      {editingProduct && (
        <>
          <h2>Edit Product</h2>
          <div className="form">
            <input type="text" name="name" value={editingProduct.name} onChange={handleChange} placeholder="Product Name" required />
            <select name="category" value={editingProduct.category} onChange={handleChange}>
              <option value="Keyboard">Keyboard</option>
              <option value="Mouse">Mouse</option>
              <option value="PCBlock">PCBlock</option>
              <option value="Monitor">Monitor</option>
            </select>
            <input type="text" name="size" value={editingProduct.size} onChange={handleChange} placeholder="Size" />
            <input type="text" name="resolution" value={editingProduct.resolution} onChange={handleChange} placeholder="Resolution" />
            <input type="text" name="refresh_rate" value={editingProduct.refresh_rate} onChange={handleChange} placeholder="Refresh Rate" />
            <input type="text" name="price" value={editingProduct.price} onChange={handleChange} placeholder="Price" required />
            <input type="text" name="image" value={editingProduct.image} onChange={handleChange} placeholder="Image URL" required />
            <button onClick={updateProduct} className="btn">Update Product</button>
          </div>
        </>
      )}

      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <button onClick={() => handleEdit(product)} className="btn edit-btn">Edit</button>
              <button onClick={() => deleteProduct(product.id)} className="btn delete-btn">Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .admin-container {
          background-color: #1e1e1e;
          color: #fff;
          padding: 20px;
          min-height: 100vh;
        }
        h1, h2 {
          text-align: center;
        }
        .form {
          display: flex;
          flex-direction: column;
          max-width: 400px;
          margin: 0 auto;
          gap: 10px;
        }
        .form input, .form select {
          padding: 10px;
          border-radius: 5px;
          border: none;
          background-color: #333;
          color: white;
        }
        .btn {
          background-color: #007bff;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .btn:hover {
          background-color: #0056b3;
        }
        .product-list {
          list-style: none;
          padding: 0;
          max-width: 600px;
          margin: 20px auto;
        }
        .product-item {
          background-color: #292929;
          padding: 15px;
          margin: 10px 0;
          border-radius: 5px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .product-image {
          width: 80px;
          height: 80px;
          border-radius: 5px;
          object-fit: cover;
        }
        .product-info {
          flex-grow: 1;
        }
        .edit-btn {
          background-color: #23913D;
        }
        .edit-btn:hover {
          background-color: #1F7F36;
        }
        .delete-btn {
          background-color: #dc3545;
        }
        .delete-btn:hover {
          background-color: #c82333;
        }
      `}</style>
    </div>
  );
};

export default Admin;
