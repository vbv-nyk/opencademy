import { foundationContent } from "../../pages/api/courseContentAPI";
import Header from "../Header/Header";
import styles from "./MainPage.module.css";
import Sidebar from "./subComponents/Sidebar";

import { renderToString } from "react-dom/server";
import { hydrate } from "react-dom";
import AssignmentCard from "../subComponents/assignmentCard/AssignmentCard";

export default function MainPage(props: any) {
  const markup = props.dataPath;
  return (
    <div>
      <div className={styles.mainPageContainer}>
        <div className={styles.lessonInformation}>
          <div className={styles.mainTitle}>{props.title}</div>
          <div className={styles.subTitle}>{props.subSection}</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: markup }}></div>
        <div className={styles.sidebarContainer}>
          <Sidebar />
        </div>
        <AssignmentCard />
      </div>
    </div>
  );
}
