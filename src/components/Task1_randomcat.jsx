import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Task1_randomcat.module.css";

const Task1_randomcat = () => {
  const [catImage, setCatImage] = useState({});
  const [toggle, setToggle] = useState(false);

  // Modify this useEffect hook below to make sure a new cat image is fetched every time the 'New Cat' button is clicked. Think about the ways to trigger our code inside the callback function with useEffect().

  useEffect(() => {
    axios.get("https://api.thecatapi.com/v1/images/search").then(({ data }) => {
      console.log(data[0]);
      setCatImage(data[0].url);
    });
  }, [toggle]);

  const handleClick = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <div className={styles.mainContent}>
      <h2>Task 1 - Fetch a new cat image by button click</h2>
      <div id={styles.imageFrame}>
        <img src={catImage} alt="A random cat" id={styles.catImage}></img>
      </div>
      <button className={styles.button} selected onClick={handleClick}>
        New Cat
      </button>
    </div>
  );
};

export default Task1_randomcat;
