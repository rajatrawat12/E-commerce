import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


const  Clothing = ({ searchItems }) => {
    const navigate = useNavigate();
  console.log("HI", searchItems);

const navigateToProduct=(id)=>{
    navigate(`/product/${id}`);  
}
const ClothingData = searchItems.filter(
    (item) => item.category === "men's clothing" || item.category === "women's clothing"
  );
  

  return (
    <>
      <Header />
      <div className="d-flex flex-wrap justify-content-center" style={{backgroundColor:""}}> 
        {ClothingData.map((item) => (
            <div className="bulging-div m-4 pb-2" style={{height:"50vh", width:"25vw", backgroundColor:"white"}} >
          <img key={item.id} src={item.image} alt={`Item ${item.id}`} className="m-2" style={{height:"30vh",width:"20vw"}} onClick={() => navigateToProduct(item.id)}/>
          <div className="" style={{textAlign:"center"}}>
          <h5>{item.title}</h5>
          </div>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};




const mapStateToProps = (store) => ({
   searchItems:store.searchItems
  });
  export default connect(mapStateToProps)(Clothing);