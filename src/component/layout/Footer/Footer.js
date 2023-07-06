import React from 'react';
import appstore from "./appstore.png";
import playstore from "./playstore.png";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">

      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playstore} alt="playstore" />
        <img src={appstore} alt="appstore" />
      </div>

      <div className="midFooter">
        <h1>eshop</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; VaibhavAgrawal</p>
      </div>

      <div className="rightFooter">
        <h4>Follow US</h4>
        <div className='tags'>
          <a href="https://www.instagram.com/vaibhav_agg0403/" target='_blank' rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/vaibhav-agrawal-58287b239/" target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="https://www.facebook.com/vaibhav.aggarwal.77715" target='_blank' rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="https://twitter.com/Vaibhav62915366" target='_blank' rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
        </div>
      </div>

    </footer >
  )
}

export default Footer