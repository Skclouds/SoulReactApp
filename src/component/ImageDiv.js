import React from "react"
import styles from "./ImageDiv.module.css"
import oliveOilImage from "./header-oliveoil.webp";
import sunflowerPicklesImage from "./header-sunfloweroil.webp";
import chutneysImage from "./header-chutney.webp";
import combosImage from "./header-combo.webp";

function ImageDiv() {
    return (
            <div className={styles.ImageDiv}>
                <div className="Olive_Pickles">
                    <img src={oliveOilImage} alt="Olive o" srcset="" />
                    <p>Olive Oil Pickles</p>
                </div>
                <div className="Sunflower_Pickles">
                    <img src={sunflowerPicklesImage} alt="Sunflower" />
                    <p>Sunflower Oil Pickles</p>
                </div>
                <div className="Chutneys">
                    <img src={chutneysImage} alt="" />
                    <p>Chutney</p>
                </div>

                <div className="Combos">
                    <img src={combosImage} alt="" />
                    <p>Combos</p>
                </div>

            </div>
        )
}

export default ImageDiv