import React from 'react';

import './Banner.css';
import Arrow from '../../assets/Arrow'
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcy...</span>
            <span>Mobile Ph...</span>
            <span>For Sale:Houses & Apart...</span>
            <span>Scoot...</span>
            <span>Commercial & Other Ve...</span>
            <span>For Rent: House & Apart...</span>
          </div>
        </div>
        <div className="banner">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="../../../Images/banner copy.png" class="d-block w-100" alt="..."  style={{height:'250px'}}/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://blog.olx.com.pk/wp-content/uploads/2020/10/RIFU-New-Banners-01.png" class="d-block w-100" alt="..."  style={{height:'250px'}} />
    </div>
    <div class="carousel-item">
      <img src="https://images.fonearena.com/blog/wp-content/uploads/2018/09/Flipkart-Big-Billion-Days-2018-1024x359.jpg" class="d-block w-100" alt="..." style={{height:'250px'}} />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
