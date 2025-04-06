import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./Productdetails.css";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Action";
// import { updateQuantityInCart } from "../Redux/Action";
// import { updateQuantity } from "../Redux/Action";
import{updateTotalQuantity} from "../Redux/Action";

const ProductDetails = ({ data, cartItems }) => {
  const [Quantity, setQuantity] = useState(1);
  const [subTotal, setSubTotal] = useState(0);
  
  // const [totalQuantity, setTotalQuantity] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { id } = useParams();
 
  let product = data.find((item) => item.id === parseInt(id));
 
  if (!product) {
    return <div>Product not found</div>;
  }
  const IncrementCount = () => {
    setQuantity(Quantity + 1);
   
 
  };
  const DecrementCount = () => {
    if (Quantity !== 1) {
      setQuantity(Quantity - 1);
    }
  };
  const NavigateToCartPage = () => {
    navigate("/cart");
  };
  
  const handleAddToCart = () => {
    // Check if the product is already in the cart
    const existingProduct = cartItems.find((item) => item.id === product.id);
    const totalQuantity = cartItems.length > 0
    ? cartItems.reduce((total, item) => total + item.quantity, 0)
    : 0;
    if (existingProduct) {
      // Product already in cart, update quantity
      
      // const updatedQuantity = Quantity;
      // dispatch(updateQuantityInCart(existingProduct.id, updatedQuantity));
      // setSubTotal(existingProduct.price * updatedQuantity);
      // dispatch(updateQuantity(updatedQuantity));
      window.alert('Item already added to the cart');
    } else {
      // console.log("Enters");
      const updatedSubTotal = product.price * Quantity;
      const updatedProduct = {
        ...product,
        quantity: Quantity,
        total: updatedSubTotal,
      };
     
      
  // console.log("test",totalQuantity + Quantity)
      setSubTotal(updatedSubTotal);
      dispatch(addToCart(updatedProduct));
      // dispatch(updateQuantity(Quantity));
      dispatch(updateTotalQuantity( totalQuantity + Quantity))
      // console.log("Test", totalQuantitys);
      // const total = cartItems.quantity;
      //  console.log("hi",total)
      // console.log("Data dispatched:", updatedProduct);
    }


   
    
  };

  return (
    <>
      <Header />
      <div className="d-flex">
        <div className="imageContainer">
          <img
            className="individualImage p-3"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="productDiscreption">
          <h2 className="p-2" style={{ fontSize: "40px" }}>
            {product.title}
          </h2>
          <div className="d-flex justify-content-start gap-4">
            <p>{product.rating.rate} star</p>
            <p>|</p>
            <p>{product.rating.count} ratings</p>
          </div>
          <hr></hr>
          <p>Price: ${product.price}</p>
          <hr></hr>
          <h5>Offers</h5>
          <div className="d-flex">
            <div
              className="m-2 p-1"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                fontSize: "12px",
                height: "fit-content",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
                transform: "scale(1.05)", // Increase the scale for bulging effect
                transition: "transform 0.3s",
              }}
            >
              <h6 className="p-1 pb-0"> Bank Offer</h6>
              <p className="p-1 pt-0">
                Upto ₹5,000.00 discount on SBI Credit Cards.
              </p>
            </div>
            <div
              className="m-2 p-1"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                fontSize: "12px",
                height: "fit-content",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
                transform: "scale(1.05)", // Increase the scale for bulging effect
                transition: "transform 0.3s",
              }}
            >
              <h6 className="p-1 pb-0">No Cost EMI</h6>
              <p className="p-1 pt-0">
                Upto ₹1,639.00 EMI interest savings on Amazon Pay ICICI.
              </p>
            </div>
            <div
              className="m-2 p-1"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                fontSize: "12px",
                height: "fit-content",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
                transform: "scale(1.05)", // Increase the scale for bulging effect
                transition: "transform 0.3s",
              }}
            >
              <h6 className="p-1 pb-0">Partner Offers</h6>
              <p className="p-1 pt-0">
                {" "}
                Get GST invoice and save up to 28% on business purchases.
              </p>
            </div>
          </div>
          <hr></hr>
          <h5>About this Item</h5>
          <p className="m-2" style={{ width: "25vw" }}>
            {product.description}
          </p>
        </div>
        <div
          className="cartAddictionDetails mt-4 mb-4 p-3"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            fontSize: "15px",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
            transform: "scale(1.05)", // Increase the scale for bulging effect
            transition: "transform 0.3s",
          }}
        >
          <h3>${product.price}</h3>
          <p>Free delivery</p>
          <p>Deliver to Rajat-Karnataka 249145</p>
          <h6>In Stock</h6>
          <p>Shop by shopOcean and deliverd by Amazon.</p>
          <p>
            Quantity: <span onClick={DecrementCount} style={{cursor:"pointer"}}>-</span> {Quantity}{" "}
            <span onClick={IncrementCount} style={{cursor:"pointer"}}>+</span>{" "}
          </p>
          <button
            className="btn btn-warning"
            onClick={() => {
              handleAddToCart();
            }}
            style={{ backgroundColor: "yellow" }}
          >
            Add to Cart
          </button>
          <br></br>
          <button className="btn btn-warning">Buy Now</button>
          <h5 className="mt-4" style={{ textAlign: "center" }}>
            SubTotal
          </h5>
          <p className="mt-2" style={{ textAlign: "center" }}>
            ${subTotal}
          </p>
          <button className="btn btn-light mt-0" onClick={NavigateToCartPage}>
            Go to cart
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
const mapStateToProps = (store) => ({
  data: store.data,
  cartItems: store.cart,
  totalQuantity: store.totalCartItems.totalQuantitys, // Assuming "data" is the key in your Redux state where you stored the fetched data
});

export default connect(mapStateToProps)(ProductDetails);
