/** @format */

import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.left}>
        <div>
          <span className={styles.green}>
            International Conference on <br></br>
          </span>{" "}
          <span className={styles.black}>
            {" "}
            Pharmaceutical Innovations & <br />
            Spirit :{" "}
          </span>{" "}
          <span className={styles.green}>
            The Annual Techno-Pharma Conclave
          </span>
        </div>
        <div className={styles.secondRow}>
          April 6-7, 2024 | IIT BHU Varanasi
        </div>
        <a
          href="https://drive.google.com/file/d/1wAISZmT0aErv4Wzwqk1psbEt5HlSFdes/view?usp=sharing"
          target="_blank"
          style={{ textDecoration: "none" }}
          className={styles.button}>
          <button className={styles.button}>Schedule</button>
        </a>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Home;
