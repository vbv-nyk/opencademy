import React, { useState } from "react";
import { paths } from "../../pages/api/pathAPI";
import styles from "./PathSelection.module.css";
import LongCard from "../longCard/LongCard";
import WideCard from "../subComponents/wideCard/WideCard";

const PathSelection = () => {
  const [wideCard, setWideCard] = useState(
    paths.filter((path) => path.cardType === "WideCard")
  );
  const [longCard, setLongCard] = useState(
    paths.filter((path) => path.cardType === "LongCard")
  );
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.wideContainer}>
          <div className={styles.heading}>Recommended Courses</div>
          <div>
            {wideCard.map((path, id) => (
              <div key={id}>
                <WideCard
                  cardType={path.cardType}
                  imageURL={path.imageURL}
                  title={path.title}
                  content={path.content}
                  courseCount={path.courseCount}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.longContainer}>
          <div className={styles.heading}>All Competitive Courses</div>
          <div className={styles.courses}>
            {longCard.map((path, id) => (
              <div key={id}>
                <LongCard
                  cardType={path.cardType}
                  imageURL={path.imageURL}
                  title={path.title}
                  content={path.content}
                  courseCount={path.courseCount}
                />
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PathSelection;
