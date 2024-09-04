import React, { useState } from "react";
import "./ProductPage.css";
import hoodie from './assets/custom_image_Hoodie-Back-Mask_grande.jpg'

const ProductPage = () => {
  const [size, setSize] = useState("S");
  const [color, setColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="image-section">
          <img
            src={hoodie}
            alt="Armbet Zipped Hoodie"
            className="product-image"
          />
        </div>

        <div className="details-section">
          <h1 className="product-title">Hoodie</h1>
          <p className="product-price">Rs. 100000</p>
          <p className="product-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sit neque iste veritatis eos cum velit laborum autem quidem facere, itaque rem officia, at ratione nobis esse. Iure, quis tenetur!
          </p>

          <ul className="product-features">
            <li>:: 50% cotton, 50% polyester</li>
            <li>:: Medium-heavy fabric</li>
            <li>:: Classic fit</li>
            <li>:: Sewn in label</li>
            <li>:: Fits true to size</li>
          </ul>

          <div className="selection-section">
            <div className="input-group">
              <label className="input-label">Size</label>
              <select
                value={size}
                onChange={handleSizeChange}
                className="input-select"
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">Color</label>
              <select
                value={color}
                onChange={handleColorChange}
                className="input-select"
              >
                <option value="Black">Black</option>
                <option value="Gray">Gray</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">Quantity</label>
              <div className="quantity-selector">
                <button
                  type="button"
                  className="quantity-button"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  className="quantity-input"
                />
                <button
                  type="button"
                  className="quantity-button"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button className="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
