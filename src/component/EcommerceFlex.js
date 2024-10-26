import React from "react";
import flexbanner from "./01_Banner_1890x_4f342516-dd88-41ef-aa60-ba618ac0d175_1520x.webp";
import styles from "./EcommerceFlex.module.css";

function EcommerceFlex() {
  return (
    <div className={styles.banner}>
      <img src={flexbanner} alt="Ecommerce Banner" />
    </div>
  );
}

export default EcommerceFlex;
