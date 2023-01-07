import { Button, Card } from "antd";
import styles from "./LongCard.module.css";

interface Props {
  cardType: string;
  imageURL: string;
  title: string;
  content: string;
  courseCount: string;
}

export default function LongCard({ ...props }: Props) {
  return (
    <div className={styles.cardContainer}>
      <Card
        className={styles.longCard}
        title={
          <div className={styles.courseImageContainer}>
            <img className={styles.courseImage} src={props.imageURL} alt="" />
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
