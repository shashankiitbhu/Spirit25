/** @format */

import React, { useEffect, useState } from "react";
import styles from "../styles/About.module.css";

const CountDown = () => {
  let [days, setDays] = useState("00");
  let [hrs, setHrs] = useState("00");
  let [mins, setMins] = useState("00");
  let [secs, setSecs] = useState("00");
  setInterval(() => {
    const targetDate = new Date("04-06-2024");
    const currentDate = new Date();
    const timeDiff = targetDate - currentDate;

    setDays(Math.floor(timeDiff / 1000 / 3600 / 24));
    setHrs(Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600)));
    setMins(Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60)));
    setSecs(Math.floor((timeDiff % (1000 * 60)) / 1000));
  }, 1000);

  return (
    <div className={styles.cd}>
      <div className={styles.cdBlock}>
        <span className={styles.cdTime}>{days}</span>
        <span className={styles.cdText}>Days</span>
      </div>
      <span className={styles.cdColon}>{":"}</span>
      <div className={styles.cdBlock}>
        <span className={styles.cdTime}>{hrs}</span>
        <span className={styles.cdText}>Hours</span>
      </div>
      <span className={styles.cdColon}>{":"}</span>
      <div className={styles.cdBlock}>
        <span className={styles.cdTime}>{mins}</span>
        <span className={styles.cdText}>Minutes</span>
      </div>
      <span className={styles.cdColon}>{":"}</span>
      <div className={styles.cdBlock}>
        <span className={styles.cdTime}>{secs}</span>
        <span className={styles.cdText}>Seconds</span>
      </div>
    </div>
  );
};

const MainArea = () => {
  return (
    <div className={styles.main}>
      <div className={styles.leftMain}>
        <img
          src="/images/bhu1.svg"
          className={styles.img1}
        />
        <img
          src="/images/bhu2.svg"
          className={styles.img2}
        />
      </div>
      <div className={styles.rightMain}>
        <h1>
          Welcome to the International Conference on Pharmaceutical Innovations
          & Spirit
        </h1>
        <p>
          The Techno-Pharma Conclave, a two-day immersive experience hosted by
          the Department of Pharmaceutical Engineering and Technology at the
          prestigious Indian Institute of Technology (BHU), Varanasi. In the
          dynamic landscape of pharmaceuticals and biotechnology, innovation is
          the driving force that propels the industry forward. Our conference is
          designed to cover a spectrum of cutting-edge tracks.
        </p>
        <div className={styles.counterBox}>
          <div className={styles.counter}>
            <h1>8+</h1>
            <p>SPEAKERS</p>
          </div>
          <div className={styles.counter}>
            <h1>12th</h1>
            <p>Edition</p>
          </div>
          <div className={styles.counter}>
            <h1>2</h1>
            <p>DAYS</p>
          </div>
          <div className={styles.counter}>
            <h1>5+</h1>
            <p>Events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThirdRow = () => {
  return (
    <div className={styles.thirdRow}>
      <div className={styles.leftRow}>TRACKS</div>
      <div className={styles.rightRow}>
        <div className={styles.themes}>
          <div>
            <img
              src="/images/tracks1.png"
              alt=""
            />
          </div>
          <div>
            <span>Cellular Crescendo : </span>
            Exploring Interactions
          </div>
        </div>
        <div className={styles.themes}>
          <div>
            <img
              src="/images/tracks2.png"
              alt=""
            />
          </div>
          <div>
            <span>Medicinal Alchemy : </span>
            The Art and Science of Pharamceutical Chemistry
          </div>
        </div>
        <div className={styles.themes}>
          <div>
            <img
              src="/images/tracks3.png"
              alt=""
            />
          </div>
          <div>
            <span>The Crystal Conclave : </span>
            Advancing Pharmaceutics Research
          </div>
        </div>
        <div className={styles.themes}>
          <div>
            <img
              src="/images/tracks4.png"
              alt=""
            />
          </div>
          <div>
            <span>Pharmacovigilance Pathways: </span>
            Regulations in Drug Development
          </div>
        </div>
        <div className={styles.themes}>
          <div>
            <img
              src="/images/tracks5.png"
              alt=""
            />
          </div>
          <div>
            <span>Neuropharmacology Nexus : </span>Approaches in Pharmacology
          </div>
        </div>
        <div className={styles.themes}>
          <div>
            <img
              src="/images/tracks6.png"
              alt=""
            />
          </div>
          <div>
            <span>Vaccinating the Future : </span>Innovation in Immunotherapics
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className={styles.page}>
      <CountDown className={styles.CountDown} />
      <MainArea />
      <ThirdRow />
      <div className={styles.lastRow}>
        <button>
          {" "}
          <a
            href="https://drive.google.com/file/d/1pYQbkwUnh6I-bSo8-yMyvb_eaDVUHijw/view?usp=sharing"
            target="_blank"
            style={{ color: "white" }}>
            {" "}
            See Schedule
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
