import React from "react";
import "./AboutUs.css";
import About_Img_1 from "../../Assets/AboutUs/AboutUs1.jpg";
import About_Img_2 from "../../Assets/AboutUs/AboutUs2.jpg";
import About_Img_3 from "../../Assets/AboutUs/AboutUs3.jpg";
const AboutUs = () => {
  return (
    <div className="about" id="about">
      <div className="about_Heading">
        <h1>What Our Customers Are Saying</h1>
      </div>
      <div className="aboutUs_Containors">
        <div className="about_Containor">
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="desc">
            "I really like there food taste so i regular taste them. One of my
            favourite Mexican food restaurant"
          </div>
          <div className="personal_Dtls">
            <div className="person_Img">
              <img src={About_Img_1} alt="" />
            </div>
            <div>
              <h3>Muhammed Adil</h3>
              <p>Kochi</p>
            </div>
          </div>
        </div>

        <div className="about_Containor">
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="desc">
            “One of my favourite Mexican food restaurant I can assure you this
            food is authentic”
          </div>
          <div className="personal_Dtls">
            <div className="person_Img">
              <img src={About_Img_2} alt="" />
            </div>
            <div>
              <h3>Fathima Farhana</h3>
              <p>Vadakara</p>
            </div>
          </div>
        </div>

        <div className="about_Containor">
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="desc">
            "Wonderful service and atmosphere really like there food taste so i
            regularly taste them ”
          </div>
          <div className="personal_Dtls">
            <div className="person_Img">
              <img src={About_Img_3} alt="" />
            </div>
            <div>
              <h3>Aiswarya Krishna</h3>
              <p>Calicut</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
