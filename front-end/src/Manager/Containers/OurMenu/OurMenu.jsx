import React, { useEffect, useState } from "react";

import "./OurMenu.css";

import axios from "axios";

import image from '../../Assets/menu icon/HeadImage.png'

const OurMenu = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("http://localhost:5000/product-list")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearch = (e) => {
    let key = e.target.value;

    if (key) {
      axios
        .get(`http://localhost:5000/search/${key}`)
        .then((res) => {
          console.log(res);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getProducts();
    }
  };

  const items =
    data.length > 0 ? (
      data.map((item, key) => {
        let src = "http://localhost:5000/uploads/" + item.url;

        return (
          <div className="our_menu">
            <div className="manager_prd_card">
              <img src={src} alt="" />
              <div className="prd_card_down">
                <h3 className="prd_name">{item.name}</h3>
                <div className="prd_desc">
                  <p>{item.desc}</p>
                </div>
              </div>
             
                <div className="price">
                  <p>
                    <i class="fa-solid fa-indian-rupee-sign"></i> {item.price}
                  </p>
                </div>
           
            </div>
          </div>
        );
      })
    ) : (
      <h1 className="no_prod">No Items Found !</h1>
    );

  return (
    < div className="our_menu">
      <div className="product_list">
      <div className="item_count">
        TOTAL ITEMS: {data.length}
        </div>
      <div className='head'>
        
        <h1>OUR MENU</h1>
        <div className='h_line'>
       
          <img src={image} alt=''/>

        </div>
          <div className="h_func">
            <div>
              <button
                className="all_prd_btn"
                onClick={() => window.location.reload(true)}
              >
                All Products
              </button>
            </div>
            <div className="search">
              <i class="fa-brands fa-searchengin"></i>
              <input
                type=""
                placeholder="search foods"
                onChange={handleSearch}
              />
            </div>
            <div className="filter">
              <i onClick={handleSearch} class="fa-solid fa-sliders"></i>
              <select onChange={handleSearch}>
                <option value="" selected>
                  select Category
                </option>
                <option value="Vegetarian">Veg</option>
                <option value="Non Veg">Non veg</option>
                <option value="Hot Drinks">Hot Drinks</option>
                <option value="Cool Drinks">Cool Drinks</option>
                <option value="Deserts">Deserts</option>
                
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="manager_prd_container">{items}</div>
    </div>
  );
};

export default OurMenu;
