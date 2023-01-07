import { Card } from "antd";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { Fragment } from "react";
import styles from "./IndexCard.module.css";
import { renderToString } from "react-dom/server";

interface pageObject {
  subject: string;
  section: string;
  subSection: Array<string>;
}

interface Props {
  dataPath: any;
  src: string;
  courseName: string;
  courseOverview: string;
  pageIndex: Array<pageObject>;
}

export default function IndexCard({ ...props }: Props) {
  const router = useRouter();

  const cards = props.pageIndex.map((card, index) => {
    const subSection = card.subSection.map((subSection, index) => {
      return (
        <li className={styles.listItem} key={index}>
          <div
            className={styles.listLinks}
            onClick={() => {
              router.push({
                pathname: "/maincontent",
                query: {
                  id: index,
                },
              });
            }}
          >
            {subSection}
          </div>
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
