import Header from "./Header";
import React from "react";
import "./Home.css";
import Footer from "./Footer";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = ({ data }) => {
  
  const navigate = useNavigate();
  const menClothingData = data.filter(
    (item) => item.category === "men's clothing"
  );
  const electronicsData = data.filter(
    (item) => item.category === "electronics"
  );
  const JwelleryData = data.filter((item) => item.category === "jewelery");
  const womenClothingData = data.filter(
    (item) => item.category === "women's clothing"
  );
  const navigateToProductDetails = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <>
      <Header />
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.91-cdn.com/hub/wp-content/uploads/2022/10/Amazon-Great-Indian-Festival-Finale-Days-Best-Affordable-5G-Phones.png"
              className="d-block h-5  w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/apparel/Events/Cashback/HalfPriceMobile._CB483831027_.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item ">
            <img
              src="https://www.businessinsider.in/photo/94004700/amazon-great-indian-festival-sale-best-deals-and-offers.jpg?imgsize=90582"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.travhq.com/wp-content/uploads/2019/05/Messages-Image3499099912.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn1.desidime.com/topics/photos/1231755/original/Fresh_8_Cropped_Main.jpg?1607599248"
              className="d-block h-10 w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.businessinsider.in/photo/84730640/best-deals-and-offers-on-artificial-jewellery-on-amazon-sale.jpg?imgsize=802340"
              className="d-block h-10 w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="d-flex flex-wrap w-100 m-3">
        <div
          className="image-container d- flex flex-wrap m-3"
          style={{
            backgroundColor: "#ffffff",
            height: "fit-content",
            width: "45vw",
            borderRadius: "10px",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
            transform: "translateY(-10px)", // Lift the div up by 10 pixels
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
        >
          <h4 className="p-3" style={{ fontWeight: "bold", font: "20px" }}>
            Pick up where you left off
          </h4>
          {menClothingData.map((item, index) => (
            <img
              className="logoSize p-3"
              src={item.image}
              alt={item.title}
              key={item.id}
              onClick={() => navigateToProductDetails(item.id)}
            />
          ))}
        </div>
        <div
          className="image-container d- flex flex-wrap m-3"
          style={{
            backgroundColor: "#ffffff",
            height: "fit-content",
            width: "45vw",
            borderRadius: "10px",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
            transform: "translateY(-10px)", // Lift the div up by 10 pixels
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
        >
          <h4 className="p-3" style={{ fontWeight: "bold", font: "20px" }}>
            Keep shopping for
          </h4>
          {JwelleryData.map((item, index) => (
            <img
              className="logoSize p-3"
              src={item.image}
              alt={item.title}
              key={item.id}
              onClick={() => navigateToProductDetails(item.id)}
            />
          ))}
        </div>
        <div
          className="image-container d- flex flex-wrap m-3"
          style={{
            backgroundColor: "#ffffff",
            height: "fit-content",
            width: "45vw",
            borderRadius: "10px",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
            transform: "translateY(-10px)", // Lift the div up by 10 pixels
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
        >
          <h4 className="p-3" style={{ fontWeight: "bold", font: "20px" }}>
            Minimum 50 % off | Top styles for her
          </h4>
          {womenClothingData.map((item, index) => (
            <img
              className="logoSize p-3"
              src={item.image}
              alt={item.title}
              key={item.id}
              onClick={() => navigateToProductDetails(item.id)}
            />
          ))}
        </div>

        <div
          className="image-container d- flex flex-wrap m-3"
          style={{
            backgroundColor: "#ffffff",
            height: "fit-content",
            width: "45vw",
            borderRadius: "10px",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
            transform: "translateY(-10px)", // Lift the div up by 10 pixels
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
        >
          <h4 className="p-3" style={{ fontWeight: "bold", font: "20px" }}>
            Best Sellers in electronics & Accessories
          </h4>
          {electronicsData.map((item, index) => (
            <img
              className="logoSize p-3"
              src={item.image}
              alt={item.title}
              key={item.id}
              onClick={() => navigateToProductDetails(item.id)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (store) => ({
  data: store.data, // Assuming "data" is the key in your Redux state where you stored the fetched data
});

export default connect(mapStateToProps)(Home);
