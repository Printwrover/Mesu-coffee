import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import drinkMenuImage1 from "../../assets/img/Drink menu8.jpg";
import drinkMenuImage2 from "../../assets/img/Drink menu9.jpg";
import drinkMenuImage3 from "../../assets/img/Drink menu10.jpg";
import { Link } from "react-router-dom";
Link
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Trà Sữa Trân Châu",
      price: 250000,
      quantity: 1,
      image: drinkMenuImage1,
      selected: false,
    },
    {
      id: 2,
      name: "Nước Ép Cam",
      price: 200000,
      quantity: 2,
      image: drinkMenuImage2,
      selected: false,
    },
    {
      id: 3,
      name: "Cà Phê Sữa Đá",
      price: 180000,
      quantity: 1,
      image: drinkMenuImage3,
      selected: false,
    },
    {
      id: 4,
      name: "Trà Đào Cam Sả",
      price: 220000,
      quantity: 1,
      image: drinkMenuImage1,
      selected: false,
    },
    {
      id: 5,
      name: "Sữa Chua Hạt Chia",
      price: 190000,
      quantity: 1,
      image: drinkMenuImage2,
      selected: false,
    },
    {
      id: 6,
      name: "Bạc Xỉu",
      price: 210000,
      quantity: 1,
      image: drinkMenuImage3,
      selected: false,
    },
  ]);

  const toggleSelectAll = (isSelected) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => ({ ...item, selected: isSelected }))
    );
  };

  const toggleItemSelection = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const removeSelectedItems = () => {
    setCartItems((prevItems) => prevItems.filter((item) => !item.selected));
  };
  const updateQuantity = (id, action) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          let newQuantity = item.quantity;
          
          // Nếu người dùng bấm tăng (increment)
          if (action === "increment") {
            newQuantity = item.quantity + 1;
          } 
          // Nếu người dùng bấm giảm (decrement)
          else if (action === "decrement") {
            newQuantity = item.quantity - 1;
          }
  
          // Kiểm tra nếu số lượng là 0, xóa sản phẩm
          if (newQuantity <= 0) {
            return null;  // Trả về null để loại bỏ sản phẩm khỏi giỏ hàng
          }
  
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item !== null); // Loại bỏ sản phẩm có giá trị null (đã bị xóa)
    });
  };
  

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) =>
        item.selected ? total + item.price * item.quantity : total,
      0
    );
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🛒 Giỏ Hàng Của Bạn</h2>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <input
            type="checkbox"
            id="selectAll"
            onChange={(e) => toggleSelectAll(e.target.checked)}
          />
          <label htmlFor="selectAll" className="ms-2">
            Chọn Tất Cả
          </label>
        </div>
        <button
          className="btn btn-danger"
          onClick={removeSelectedItems}
          disabled={cartItems.every((item) => !item.selected)}
        >
          Xóa Các Sản Phẩm Đã Chọn
        </button>
      </div>
      <div className="row gy-4">
        {cartItems.map((item) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{item.name}</h5>
                <p className="text-muted mb-1">Giá: {item.price.toLocaleString()} đ</p>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => updateQuantity(item.id, "decrement")}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => updateQuantity(item.id, "increment")}
                    >
                      +
                    </button>
                  </div>
                  <span className="fw-bold text-primary">
                    {(item.price * item.quantity).toLocaleString()} đ
                  </span>
                </div>
                <div className="form-check mt-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`select-${item.id}`}
                    checked={item.selected}
                    onChange={() => toggleItemSelection(item.id)}
                  />
                  <label className="form-check-label" htmlFor={`select-${item.id}`}>
                    Chọn Sản Phẩm Này
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 ? (
        <div className="text-end mt-5">
          <h4>
            Tổng Thanh Toán:{" "}
            <span className="text-primary fw-bold">
              {calculateTotal().toLocaleString()} đ
            </span>
          </h4>
          <Link to='/ThanhToan'>
          <button className="btn btn-primary px-4 py-2 mt-3">Thanh Toán</button>
          </Link>
        </div>
      ) : (
        <div className="text-center mt-5">
          <p className="text-muted">Giỏ hàng của bạn trống. Hãy thêm sản phẩm vào ngay!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
