import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import mainImage from '../../Assets/mainImage.png'
import subImage1 from '../../Assets/subImage1.png'
import subImage2 from '../../Assets/subImage2.png'
import subImage3 from '../../Assets/subImage3.png'

const urlString =window.location.href
const url = new URL(urlString);

// Get the search parameters from the URL
const searchParams = url.searchParams;

// Get the value of a specific parameter
const table = searchParams.get('table');
const tableNo = searchParams.get('tableNo');



localStorage.setItem("table",JSON.stringify(table))
localStorage.setItem("tableNo",JSON.stringify(tableNo))
const Home = () => {
  const navigate = useNavigate();
  const [Atable,setATable]=useState('')
  const [tableNo,setTableNo]=useState('')
  useEffect(()=>{
    setATable(JSON.parse(localStorage.getItem("table")))
    setTableNo(JSON.parse(localStorage.getItem("tableNo")))
  },[])
  return (
    <div className="_home" id="home">
      <div className="home_left">
        <div className="_head">
          <h1>Simple and Tasty Recipe</h1>
        </div>
        <div className="desc">
          <p>
            The food places is an neighborhood restaurant serving seasonal
            global cuisine driven by the faire
          </p>
        </div>
        <div className="btn">
          <button onClick={()=>{navigate(`${(Atable==="true")?`/menu?table=true&tableNo=${tableNo}`:'/menu'}`)}}>Order Now</button>
        </div>
      </div>
      <div className="home_right">
        <div className="circle"></div>
        <div >
        <img className="mainImage" src={mainImage} alt=""/>
        </div>
        <div className="subImage1">
        <img className="subImage" src={subImage1} alt=""/>
        </div>
        <div className="subImage2">
        <img className="subImage" src={subImage2} alt=""/>
        </div>
        <div className="subImage3">
        <img className="subImage" src={subImage3} alt=""/>
        </div>
        
        
      </div>
    </div>
  );
};

export default Home;
