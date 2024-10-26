import React from "react"
import tamarindimg from "./date-tamarind_938d23e9-a329-4a5c-b7c7-75d48b1e8474.webp"
import garlicimg from "./garlicpickle.webp"
import mixed from "./DSC09686.webp"
import mangopickle from "./mango-pickle_1024x1024.webp"
import styles from "./BestSeller.module.css"

function BestSellerImg(){
    return (
        <div className={styles.BestSellerImg}>
            <img src={tamarindimg }className="rounded float-start" styles={styles.tamarind} alt="..."/>
            <img src={garlicimg}className="rounded float-end" styles={styles.garlic} alt="..."/>
            <img src={mixed}className="rounded float-end" styles={styles.garlic} alt="..."/>
            <img src={mangopickle}className="rounded float-end" styles={styles.garlic} alt="..."/>

        </div>
    )
}

export default BestSellerImg