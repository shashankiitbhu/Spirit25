/** @format */

import styles from "./Speakers.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imagecontainer}>
        <img
          src={item.image}
          alt=""
        />
      </div>

      <div className={styles.name}>
        <h3>{item.name}</h3>
      </div>

      <div className={styles.desc}>
        <p>{item.des}</p>
      </div>
      <div className={styles.info}>
        {/* <img src={item.logo} alt="designation" /> */}
        <h1>{item.company}</h1>
      </div>
    </div>
  );
};
const Speakers = () => {
  let speakers = [
    {
      name: "Dr. Rajeev Raghuvanshi",
      image: "/speakers/rajeev.png",
      des: "Drugs Controller General OF INDIA",
      logo: "/speakers/dcgi.png",
      company: "CDSCO",
    },
    {
      name: "Dr. Dulal Panda",
      image: "/speakers/panda.png",
      des: "Director",
      logo: "/speakers/niper.jpg",
      company: "NIPER Mohali",
    },
    {
      name: "Dr. Birendra Singh",
      image: "/speakers/birendra.png",
      des: "President, Global Quality Head",
      logo: "/speakers/mankind.png",
      company: "Mankind Pharma",
    },
    {
      name: "Dr. Anil Kukreja",
      image: "/speakers/anil.png",
      des: "Vice President, Medical Affairs and Regulatory",
      logo: "/speakers/astra.png",
      company: "AstraZeneca",
    },
    {
      name: "Dr. Amit Vaish",
      image: "/speakers/amit.png",
      des: "Principal Scientist",
      logo: "/speakers/amgen.png",
      company: "Amgen",
    },
    {
      name: "Dr. Romi Singh",
      image: "/speakers/romi.png",
      des: "Senior Vice President",
      logo: "/speakers/sun-pharma.png",
      company: "Sun Pharma",
    },
    {
      name: "Dr. Navratna Vajpai",
      image: "/speakers/Navratna-Vajpai.png",
      des: "Chief Scientific Manager",
      logo: "/speakers/janssen.png",
      company: "Biocon Biologics",
    },
    {
      name: "Dr. Anish Chakkumkal",
      image: "/speakers/anish.png",
      des: "Associate Scientific Director",
      logo: "/speakers/janssen.png",
      company: "Johnson & Johnson",
    },
    {
      name: "Dr. Rajeev Pandey",
      image: "/speakers/rajeevPandey.png",
      des: "Laboratory Director",
      logo: "/speakers/janssen.png",
      company: "Strand",
    },
    {
      name: "Dr. Ankit Saneja",
      image: "/speakers/ankit.png",
      des: "Scientist",
      logo: "/speakers/janssen.png",
      company: "CSIR-IHBT India",
    },
    {
      name: "Dr. Prakash Muthudoss",
      image: "/speakers/prakash.png",
      des: "Chief Executive Officer",
      logo: "/speakers/janssen.png",
      company: "A2Z4.0 ",
    },
    {
      name: "Sarvesh Singh",
      image: "/speakers/sarvesh.jpg",
      des: "Managing Director",
      logo: "/speakers/janssen.png",
      company: "Marichi Ventures ",
    },
  ];
  return (
    <div
      className={styles.page}
      id="speakers">
      <h1>Keynote Speakers</h1>
      <div className={styles.list}>
        {speakers.map((item, index) => {
          return (
            <Card
              item={item}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Speakers;
