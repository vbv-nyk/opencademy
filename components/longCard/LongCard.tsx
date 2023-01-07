import { Button, Card } from "antd";
import styles from "./LongCard.module.css";

export default function LongCard() {
  const props = {
    imageURL:
      "https://www.theodinproject.com/assets/badge-ruby-on-rails-5c5f3a237abf4d3d3cb3d7efc64cdbd9e493b876bd7a64c8b70977204d93ddaa.svg",
    title: "Full Stack Ruby On Rails",
    content: `
    This path takes you through our entire Ruby on Rails curriculum. The
    courses should be taken in the order that they are displayed. You'll
    learn everything you need to know to create beautiful responsive
    websites from scratch using Ruby on Rails.`,
    courseCount: `7 Courses`,
  };
  return (
    <div className={styles.cardContainer}>
      <Card
        className={styles.longCard}
        title={
          <div className={styles.courseImageContainer}>
            <img
              className={styles.courseImage}
              src={props.imageURL}
              alt=""
              srcset=""
            />
            <div className={styles.pathDetails}>
              <div className={styles.pathCount}>PATH</div>
              <div className={styles.courseCount}>{props.courseCount}</div>
            </div>
          </div>
        }
        bordered={false}
      >
        <div className={styles.pathDescriptionContainer}>
          <div className={styles.pathName}>{props.title}</div>
          <div className={styles.pathDesc}>{props.content}</div>
          <Button>Explore</Button>
        </div>
      </Card>
    </div>
  );
}
