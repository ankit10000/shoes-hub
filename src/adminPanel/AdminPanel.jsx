import React, { useState } from 'react';
import product from '../components/Allproducts'

const ProductList = ({ products, onDelete, onUpdate }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.imageSrc} alt={product.name} />
          <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => onUpdate(product)}>Update</button>
            <button onClick={() => onDelete(product.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const AdminPanel = () => {
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    name: product.name,
    imageSrc: product.imageSrc,
    description: product.description,
    price: product.price,
    color: product.color,
  });

  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleDelete = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleUpdate = (productToUpdate) => {
    setFormData(productToUpdate);
    setIsUpdateMode(true);
    setSelectedProductId(productToUpdate.id);
  };

  const handleInsertOrUpdate = () => {
    if (isUpdateMode) {
      // Update existing product
      const updatedProducts = products.map((product) =>
        product.id === selectedProductId ? { ...product, ...formData } : product
      );
      setProducts(updatedProducts);
      setIsUpdateMode(false);
      setSelectedProductId(null);
    } else {
      // Insert new product
      const newProduct = {
        id: products.length + 1,
        ...formData,
      };
      setProducts([...products, newProduct]);
    }

    // Reset form data
    setFormData({
      name: '',
      imageSrc: '',
      description: '',
      price: '',
      color: '',
    });
  };

  return (
    <div>
      <h1>Product List</h1>
      <form>
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <br />

        <label>Image Src:</label>
        <input
          type="text"
          value={formData.imageSrc}
          onChange={(e) => setFormData({ ...formData, imageSrc: e.target.value })}
        />
        <br />

        <label>Description:</label>
        <input
          type="text"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <br />

        <label>Price:</label>
        <input
          type="text"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <br />

        <label>Color:</label>
        <input
          type="text"
          value={formData.color}
          onChange={(e) => setFormData({ ...formData, color: e.target.value })}
        />
        <br />

        <button type="button" onClick={handleInsertOrUpdate}>
          {isUpdateMode ? 'Update Product' : 'Insert Product'}
        </button>
      </form>

      <ProductList products={products} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
};

export default AdminPanel;
