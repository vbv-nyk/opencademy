import { Card } from "antd";
import { Fragment } from "react";
import styles from "./IndexCard.module.css";

interface pageObject {
  subject: string;
  section: string;
  subSection: Array<string>;
}

interface Props {
  courseOverview: string;
  pageIndex: Array<pageObject>;
}

export default function IndexCard({ ...props }: Props) {
  const cards = props.pageIndex.map((card, index) => {
    const subSection = card.subSection.map((subSection, index) => {
      return (
        <li className={styles.listItem} key={index}>
          {subSection}
        </li>
      );
    });
    return (
      <Fragment key={index}>
        <div className={styles.subjectName}>{card.subject}</div>
        <Card
          className={styles.card}
          title={<div className={styles.cardTitle}>{card.section}</div>}
        >
          <ul className={styles.listContainer}>{subSection}</ul>
        </Card>
      </Fragment>
    );
  });
  return <div className={styles.cardContainer}>{cards}</div>;
}
