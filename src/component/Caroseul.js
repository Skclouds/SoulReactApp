import React from "react";
import Baner1 from "./TFFoods-OliveOil-ChutneyBanner-1680x525px-15-3-24_Final-01_1.webp";
import Baner2 from "./TFFoods-Buy2-DiscountBanner-1680x525px-27-3-24_222-01-01_1.webp";
import Baner3 from "./TFFoods-OliveOil-PickleBanner-1680x525px-27-6-24-01_1_1.webp";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Caroseul() {
  return (
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Baner1} className="d-block w-100" alt="Olive Oil Chutney Banner" />
          </div>
          <div className="carousel-item">
            <img src={Baner2} className="d-block w-100" alt="Buy 2 Discount Banner" />
          </div>
          <div className="carousel-item">
            <img src={Baner3} className="d-block w-100" alt="Olive Oil Pickle Banner" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Caroseul;
