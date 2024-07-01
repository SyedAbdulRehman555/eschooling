import React from "react";
import styles from "./webpage.module.css";
const Main = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.banner}>
          <div className={styles.banner_children}>
            <span className={styles.banner_3}>Great Quality Cosial Life</span>
            {/* <img src="./landing_page_images/banner.jpg" /> */}
            <h1 className={styles.banner_1}>Discover the world of</h1>

            <h1 className={styles.banner_1}>possible university</h1>
            <button className={styles.ban_btn}>Admissions</button>
          </div>
        </div>
        <div className={styles.academics}>
          <h2 className={styles.acd_hd}>Academics</h2>
        </div>
      </div>
    </>
  );
};

export default Main;
