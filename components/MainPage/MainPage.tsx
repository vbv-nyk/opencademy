import { foundationContent } from "../../pages/api/courseContentAPI";
import Header from "../Header/Header";
import styles from "./MainPage.module.css";
import Sidebar from "./subComponents/Sidebar";

import { renderToString } from "react-dom/server";
import { hydrate } from "react-dom";

export default function MainPage(props: any) {
  console.log(props);
  const div = document.createElement("div");
  const markup = props.dataPath;
  return (
    <div>
      <Header />
      <div className={styles.mainPageContainer}>
        <div className={styles.lessonInformation}>
          <div className={styles.mainTitle}>{props.title}</div>
          <div className={styles.subTitle}>{props.subSection}</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: markup }}></div>
        <Sidebar />
      </div>
    </div>
  );
}
