import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearence,
}) => {
  const totalPrice = cartItems.reduce(
    (price, product) => price + product.quantity * product.price,
    0
  );

  const navigate = useNavigate();
  // const table =localStorage.getItem("table")
  const [Atable, setATable] = useState("");
  const [tableNo, setTableNo] = useState("");
  useEffect(() => {
    setATable(JSON.parse(localStorage.getItem("table")));
    setTableNo(JSON.parse(localStorage.getItem("tableNo")));
  }, []);

  return (
    <div className="cart_items">
      <div className="cart_items_header">
        <h2>Cart Items</h2>
        <div className="clear_cart">
          {cartItems.length >= 1 && (
            <button onClick={handleCartClearence} className="clear_cart_btn">
              Clear Cart
            </button>
          )}
        </div>
      </div>

      {cartItems.length === 0 && (
        <div className="cart_items_empty">NO items</div>
      )}

      {cartItems?.map((product) => (
        <div className="cart_items_list" key={product._id}>
          <div>
            <img
              className="cart_items_image"
              src={"http://localhost:5000/uploads/" + product.url}
              alt={product.name}
            />
          </div>
          <div className="cart_items_name">{product.name}</div>
          <div className="cart_items_functions">
            <button
              onClick={() => handleAddProduct(product)}
              className="cart_items_add"
            >
              +
            </button>
            <p>{product.quantity}</p>
            <button
              onClick={() => handleRemoveProduct(product)}
              className="cart_items_remove"
            >
              -
            </button>
          </div>
          <div className="cart_items_price">
            <p>
              {product.quantity} * <i class="fa-solid fa-indian-rupee-sign"></i>
              {product.price}
            </p>
          </div>
          <div className="cart_item_price">
            <i class="fa-solid fa-indian-rupee-sign"></i>
            {product.quantity * product.price}
          </div>
        </div>
      ))}

      {cartItems.length > 0 && (
        <div className="cart_items_total_price_proceed">
          <div className="cart_items_total_price">
            <p>
              {" "}
              TOTAL : <i class="fa-solid fa-indian-rupee-sign"></i> {totalPrice}{" "}
              /-
            </p>
          </div>
          <div className="_proceed_btn">
            <button
              onClick={
                Atable === "true"
                  ? () => {
                      navigate(
                        `${
                          Atable === "true"
                            ? `/payment?table=true&tableNo=${tableNo}`
                            : "/payment"
                        }`
                      );
                    }
                  : () => {
                      navigate("/checkout");
                    }
              }
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
