/** @format */

import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import styles from "./Footer.module.css";
const Footer1 = () => {
  return (
    <div
      className={styles.mainContainer}
      id="footer">
      <div className={styles.container1}>
        <div className={styles.div1a}>
          <p style={{ color: "#009D9A", fontWeight: "bold" }}>
            International Conference on
          </p>
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "gray",
            }}>
            Pharmaceutical Innovations & SPIRIT :
          </h1>
          <div className={styles.div1b}>
            <p style={{ color: "#009D9A", fontWeight: "bold" }}>
              The Annual Techno-Pharma Conclave
            </p>
          </div>
        </div>
        <div style={{ marginTop: "5%" }}>
          <div
            className={styles.div1b}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
            }}>
            <h1 style={{ color: "#009D9A", fontSize: "16px" }}>
              Mobile :&nbsp;
            </h1>
            <p style={{ fontSize: "16px", color: "gray", fontWeight: "bold" }}>
              +91 8319456409
            </p>
          </div>
          <div className={styles.div1b}>
            <h1 style={{ color: "#009D9A", fontSize: "16px" }}>
              Email us :&nbsp;
            </h1>
            <p style={{ fontSize: "18px", color: "gray", fontWeight: "bold" }}>
              <a
                href="mailto:spiriit@itbhu.ac.in"
                style={{ textDecoration: "none", color: "black" }}>
                spirit@iitbhu.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.buttondiv}>
        <button className={styles.button}>Contact Us</button>
        <div className={styles.atagdiv}>
          <a
            className={styles.atag}
            href="https://www.facebook.com/IITBHUSPIRIT/"
            target="_blank">
            <FaFacebookSquare size={30} />
          </a>
          <a
            className={styles.atag}
            href="https://www.instagram.com/spirit.iit.bhu?igsh=bWZnYXpmOXh4MGVx"
            target="_blank">
            <FaInstagram size={30} />
          </a>
          <a
            href="https://twitter.com/Spirit_IIT"
            target="_blank"
            className={styles.atag}>
            <RiTwitterXFill size={30} />
          </a>
          <a
            href="https://www.linkedin.com/company/spiritiitbhu/"
            target="_blank"
            className={styles.atag}>
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
