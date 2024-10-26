import React from "react";
import styles from "./CstReview.module.css";
import customerimg from "./Bhavin_Patel_cbfd8825-80e1-42c9-9a42-867da96c2412_128x128.webp"
import customering2 from "./Harshada_Charatkar_128x128.webp"
function CstReview() {
    return (
        <div className={styles.reviewContainer}>
            <div className={styles.FirstReview}>
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                        <p className={styles.cardText}>Best purchase I've ever made! I had no idea Mango pickles made with olive oil could taste so good</p>
                        <img src={customerimg} alt="Bhavin Patel" />
                        <p>-Bhavin Patel</p>
                    </div>
                </div>
            </div>
            <div className={styles.SecondReview}>
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                        <p className={styles.cardText}>This is my second time buying the Mixed pickles. The taste is just like my Nani's homemade pickles. Would definitely recommend it to others.</p>
                        <img src={customering2} alt="Harshada Charatkar" />
                        <p>-Harshada Charatkar</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CstReview;