/** @format */

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBtn = () => {
    setIsOpen((prev) => !prev);
  };
  document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(`nav_links a menu a`);

    navLinks.forEach(function (navLink) {
      navLink.addEventListener("click", function (event) {
        // event.preventDefault();

        var targetId = this.getAttribute("href");
        var targetSection = document.querySelector(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  });

  return (
    <section className={styles.wrapper}>
      <div className={styles.nav}>
        <div className={styles.title}>
          <img
            src="./images/logo_2.png"
            alt=""
          />
          <h1>SPIRIT'24</h1>
        </div>
        <div className={styles.nav_links}>
          <a href="">Home</a>
          <a href="">Schedule</a>
          <a href="#speakers">Speakers</a>
          <a href="#events">Events</a>
          <a href="#footer">Contact</a>
          <a
            href="https://drive.google.com/file/d/1wAISZmT0aErv4Wzwqk1psbEt5HlSFdes/view"
            target="_blank"
            style={{ textDecoration: "none" }}>
            <button className={styles.button}>Schedule!</button>
          </a>

          {!isOpen && (
            <IoMenu
              onClick={toggleBtn}
              className={styles.icons}
            />
          )}
          {isOpen && (
            <IoClose
              onClick={toggleBtn}
              className={styles.icons}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <a href="">Home</a>
          <a href="">Schedule</a>
          <a href="#speakers">Speakers</a>
          <a href="#events">Events</a>
          <a href="#footer">Contact</a>
        </div>
      )}
    </section>
  );
};

export default Navbar;
