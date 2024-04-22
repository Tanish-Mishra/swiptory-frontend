import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Header from "../Header/Header";
import StoryReelCard from "../StoryReelCard/StoryCard";
const Home = () => {
  const [selected, isSelected] = useState();
  const [storiesType, setStoryType] = useState([
    {
      id: 1,
      storyName: "All",
      imgUrl: "/assets/images/all.png",
    },
    {
        id: 2,
      storyName: "Medical",
      imgUrl: "/assets/images/medical.png",
    },
    {
        id: 3,
      storyName: "Fruits",
      imgUrl: "/assets/images/fruits.png",
    },
    {
        id: 4,
      storyName: "World",
      imgUrl: "/assets/images/Healthcare.png",
    },
    {
        id: 5,
      storyName: "India",
      imgUrl: "/assets/images/india.png",
    },
  ]);
  return (
    <div>
      <Header />
      <div className={styles.home__storycard_container}>
        {storiesType.map((element, index, arr) => (
          <StoryCard  key={element} id={element.id} imageUrl={element.imgUrl} storyName={element.storyName} />
        ))}
      </div>

      <div className={styles.home__story_card_container}>
              <h3 className={styles.home__story_card_heading}>Top Stories About Food</h3>
              <StoryReelCard/>
      </div>


    </div>
  );
};

const StoryCard = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <div
        className={`${styles.home__cards} ${styles.home__card_all}`}
        style={{
          backgroundImage: `url(${props.imageUrl})`,
          border: isSelected ? "5px solid #00ACD2" : "none",
        }}
        onClick={()=>{
        setIsSelected(true)
        }}
      >
        <span className={styles.home__text}>{props.storyName || "Error"}</span>
      </div>
    </>
  );
};
export default Home;
