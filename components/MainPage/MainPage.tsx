import { foundationContent } from "../../pages/api/courseContentAPI";
import Header from "../Header/Header";
import styles from "./MainPage.module.css";
import Sidebar from "./subComponents/Sidebar";
import { renderToString } from "react-dom/server";
import { hydrate } from "react-dom";

export default function MainPage(props: any) {
  const markup = foundationContent.content[props.id];
  return (
    <div>
      <Header />
      <div className={styles.mainPageContainer}>
        <div className={styles.lessonInformation}>
          <div className={styles.mainTitle}>{foundationContent.mainTitle}</div>
          <div className={styles.subTitle}>{foundationContent.subTitle}</div>
        </div>
        <div>{markup}</div>
        <Sidebar />
      </div>
    </div>
  );
}
