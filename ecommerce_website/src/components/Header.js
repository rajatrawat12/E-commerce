import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSearchItems } from "../Redux/Action";
import { useDispatch } from "react-redux";
const Header = ({ totalItems ,data}) => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');
  const [selectWidth, setSelectWidth] = useState("auto"); // Initial width
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const filteredItems = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
        dispatch(updateSearchItems(filteredItems))
 
        
        const handleSelectChange = (e) => {
          const selectedValue = e.target.value;
          setSelectedValue(selectedValue);
          console.log(selectedValue)
        };
        useEffect(() => {
          if (selectedValue === '2') {
            navigate("/allProducts");
            console.log(selectedValue)
          } else if (selectedValue === '9') {
            navigate("/clothings");
          } else if (selectedValue === '7') {
            navigate("/electronics");
          } else if (selectedValue === '12') {
            navigate("/jewelerys");
          }
        }, [selectedValue]);
  
//  console.log( "test", totalItems)
  // useEffect(() => {
  //   const selectElement = document.getElementById("customSelect");
  //   const selectedOptionText =
  //     selectElement.options[selectElement.selectedIndex].text;
  //   const textWidth = getTextWidth(selectedOptionText);

  //   setSelectWidth(textWidth + "px");
  // }, [selectedOption]);

  // const getTextWidth = (text) => {
  //   const canvas = document.createElement("canvas");
  //   const context = canvas.getContext("2d");
  //   context.font = getComputedStyle(document.body).fontSize + " sans-serif";
  //   const width = context.measureText(text).width;
  //   return width;
  // };

  return (
    <>
      <div
        className="d-flex justify-content-around pt-2"
        style={{
          backgroundColor: "#000000",
          color: "#f2f2f2",
          fontWeight: "bolder",
          fontSize: "10px",
        }}
      >
        <img
          className="logoImage"
          src="https://www.taxscan.in/wp-content/uploads/2023/02/Amazon-CA-students-Vacancy-In-Amazo-CA-Vacancy-CA-financial-analyst-intern-financial-intern-vacancy-financial-analyst-inrern-trainee-vacancy-jobscan.jpg"
          alt="Logo"
        />
        <p className="deliveryAddress">Deliver to Rajat</p>
        <div className="input-group mb-3">
          <div
            className="input-group-append"
            style={{ backgroundColor: "grey", width: selectWidth }}
          >
            <select
              id="customSelect"
              className="form-select"
              style={{
                backgroundColor: "grey",
                height: "6vh",
                width: selectWidth,
              }}
              aria-label="Default select example"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="1">All </option>
              <option value="2" >Your Products</option>
              <option value="3">Amazon Pharmacy</option>
              <option value="4">Amazon Devices</option>
              <option value="5">Books</option>
              <option value="6">Beauty</option>
              <option value="7">Clothing & Accessories</option>
              <option value="8">Computer & Accessories</option>
              <option value="9">Electronics</option>
              <option value="10">Furniture</option>
              <option value="11">Grocery</option>
              <option value="12">Jwellery</option>
              <option value="13">Music</option>
              <option value="14">Sports,Fitness and OutDoors</option>
            </select>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search Amazon.in"
            aria-label="Search"
            aria-describedby="button-addon2"
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <div
            className="input-group-append"
            style={{ backgroundColor: "#ff9900" }}
          >
            <button
              className="btn btn-outline-secondary button-no-hover"
              style={{ border: "none" }}
              type="button"
              id="button-addon2"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>

        <h6 className="mt-3">EN</h6>
        <div>
          <p className="mb-0">Hello, Rajat</p>
          <h6 className="mt-0">Accounts & Lists</h6>
        </div>
        <div>
          <p className="mb-0">Returns</p>
          <h6 className="mt-0">& Orders</h6>
        </div>
        <div className="d-flex justify-content-center">
          <img
            className="cartLogo m-0"
            src="https://media.wired.com/photos/59325eba9be5e55af6c246eb/master/pass/amazoncart-feat.jpg"
            alt="Cart Logo"
          />
          <span className="" style={{fontSize:"20px",fontweight:"bold",color:"yellow"}} >{
         <p> {totalItems.totalQuantity}</p> }</span>
          <h6 className="CartText mt-3 m-2" style={{ textAlign: "end" }}>
            Cart
          </h6>
        </div>
      </div>
      <div
        className="d-flex  justify-content-around p-2"
        style={{
          backgroundColor: "#232f3e",
          color: "#f2f2f2",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        <span>All</span>
        <span>Fresh</span>
        <span>Today's Deals</span>
        <span>Health,household and personal Care</span>
        <span>Sell</span>
        <span>Gift Cards</span>
        <span>Buy Again</span>
        <span>subscribe & Save </span>
        <span>Baby</span>
        <span>Grocery & Gourmet Foods</span>
        <span>Best Sellers</span>
        <span>Pet Supplies</span>
        <span>Amazon miniTV</span>
        <span>Gift Ideas</span>
      </div>
    </>
  );
};
const mapStateToProps = (store) => ({
  data:store.data,
  totalItems: store.totalCartItems,
});
export default connect(mapStateToProps)(Header);
