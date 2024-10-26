import React from "react";
import styles from "./Head.module.css";

function Head() {
    return (
        <div  className={styles.Head}>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000" >
                        Buy any 2 products at 15% off
                    </div>
                    <div className="carousel-item" data-bs-interval="3000" >
                        Additional 5% off on prepaid offer
                    </div>
                    <div className="carousel-item" data-bs-interval="3000" >
                        Buy any 3 products at 20% off
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Head;
