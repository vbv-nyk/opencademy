import { Button, Card } from "antd";
import styles from "./WideCard.module.css";
interface Props {
  cardType: string;
  imageURL: string;
  title: string;
  content: string;
  courseCount: string;
}
export default function WideCard({ ...props }: Props) {
  return (
    <Card
      className={styles.cardContainer}
      extra={
        <Button href="#" className={styles.selectButton}>
          Select
        </Button>
      }
      title={
        <div className={styles.titleHolder}>
          <div className={styles.imageHolder}>
            <img src={props.imageURL} />
          </div>
          <div className={styles.cardInformation}>
            <div className={styles.cardTag}>Start Here</div>
            <div className={styles.cardTitle}>{props.title}</div>
          </div>
        </div>
      }
    >
      <p>{props.content}</p>
    </Card>
  );
}
