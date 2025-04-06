import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { connect } from "react-redux";
import { removeFromCart } from "../Redux/Action";
import { useDispatch } from "react-redux";
import { updateTotalQuantity } from "../Redux/Action";
const Cart = ({ cartItems, removeFromCart }) => {
  const dispatch = useDispatch();
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const [Product, setProduct] = useState(cartItems);
  console.log(cartItems)
 
  useEffect(() => {
    // Initialize selectedQuantities with pre-existing quantities
    const initialQuantities = {};
    Product.forEach((item) => {
      initialQuantities[item.id] = item.quantity;
    });
    setSelectedQuantities(initialQuantities);
  }, [Product]);
  console.log(selectedQuantities)
   
  const handleQuantityChange = (event, productId) => {
    const newQuantity = event.target.value;
    setSelectedQuantities((prevState) => ({
      ...prevState,
      [productId]: newQuantity,
    }));
    console.log(selectedQuantities)
  };
  useEffect(() => {
    // This code will run whenever selectedQuantities or productId changes
    console.log(` changed to tis`);
  }, [selectedQuantities]);
  const handleDeleteItem = (productId) => {
    // setSelectedQuantities((prevState) => {
    //   const updatedQuantities = { ...prevState };
    //   delete updatedQuantities[productId];
    //   return updatedQuantities;
    // });
    const updatedProduct = Product.filter((item) => item.id !== productId);
    console.log("test",Product)
    // console.log(updatedProduct);
    // console.log(updatedProduct.length)
    setProduct(updatedProduct);
    removeFromCart(updatedProduct);
  };
  useEffect(() => {
    console.log("item deleted");
  }, [Product]);
  console.log(selectedQuantities)
  const totalQuantity = Object.values(selectedQuantities).reduce(
    (acc, curr) => acc + Number(curr),
    0);
    console.log(totalQuantity)
    useEffect(() => {
      // Dispatch the action with totalQuantity
      dispatch(updateTotalQuantity(totalQuantity));
  },[selectedQuantities, dispatch, totalQuantity]);
  const totalAmount = Product.reduce((acc, item) => {
    const quantity = selectedQuantities[item.id] || item.quantity;
    return acc + item.price * quantity;
  }, 0);
 
  return (
    <>
      <Header />
      {(cartItems.length !== 0) ? (
        <>
          <div className="cartContainer" style={{width:"100vw",backgroundColor:""}}>
            <div style={{width:"80vw",backgroundColor:""}}>
          <h1>Shopping Cart</h1>
          <hr style={{ height: "2px",width: "100%", margin: "20px 0"}}></hr>
          <div style={{ width: "80vw" }}>
            {Product.map((item) => (
              <div>
              <div
                key={item.id}
                className="d-flex align-items-center mb-3"
                style={{ width: "80vw", backgroundColor: "" }}
              >
                
                
                <img
                  className="m-5"
                  style={{ height: "30vh" }}
                  src={item.image}
                  alt={item.title}
                />
              
                <div style={{ backgroundColor: "", width: "60vw" }}>
                  <h4 className="m-1" style={{ backgroundColor: "" }}>
                    {item.title}
                  </h4>
                  <h3 className="mb-1" style={{ fontWeight: "bold" }}>
                    ${item.price}
                  </h3>
                  <p
                    className="mb-1"
                    style={{ color: "lightblue", fontSize: "12px" }}
                  >
                    Save 5% more on with subscribe & Save
                  </p>
                  <p
                    className="mb-1"
                    style={{ color: "green", fontSize: "12px" }}
                  >
                    In stock
                  </p>
                  <p
                    className="mb-1"
                    style={{ color: "grey", fontSize: "12px" }}
                  >
                    Eligible for free shipping
                  </p>
                  <div
                    className="d-flex justify-content-start gap-3"
                    style={{
                      backgroundColor: "",
                      width: "50vw",
                      alignItems: "center",
                    }}
                  >
                    <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                    <select
                      id={`quantity-${item.id}`}
                      value={selectedQuantities[item.id] || item.quantity}
                      onChange={(e) => handleQuantityChange(e, item.id)}
                    >
                      {[...Array(10)].map((_, index) => (
                        <option key={index + 1} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </select>
                    <p
                      className="mt-3"
                      onClick={() => handleDeleteItem(item.id)}
                      style={{
                        fontSize: "12px",
                        color: "lightblue",
                        fontWeight: "bold",
                       cursor: "pointer"
                      }}
                    >
                      | Delete the Item{" "}
                    </p>
                    <p
                      className="mt-3"
                      style={{
                        fontSize: "12px",
                        color: "lightblue",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      | Save for Later{" "}
                    </p>
                    <p
                      className="mt-3"
                      style={{
                        fontSize: "12px",
                        color: "lightblue",
                        fontWeight: "bold",
                      }}
                    >
                      | See more like this{" "}
                    </p>
                    <p
                      className="mt-3"
                      style={{
                        fontSize: "12px",
                        color: "lightblue",
                        fontWeight: "bold",
                      }}
                    >
                      | Share
                    </p>
                  </div>
              
                </div>
              </div>
              <hr style={{ height: "2px",width: "100%", margin: "20px 0"}}></hr>
              </div>
            ))}
            
            <h3 className="d-flex justify-content-end">
              Subtotal({totalQuantity}) items: ${totalAmount.toFixed(2)}
            </h3>
          </div>
          </div>
          </div>
        </>
        
      ) : (
        <>
          <h5>Your Amazon cart is empty</h5>
          <p>
            Check your Saved for later items below or{" "}
            <span>Continue shopping.</span>
          </p>
        </>
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = (store) => ({
  cartItems: store.cart,
});
const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
