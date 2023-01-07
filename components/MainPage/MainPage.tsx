import { foundationContent } from "../../pages/api/courseContentAPI";
import Header from "../Header/Header";
import styles from "./MainPage.module.css";
import Sidebar from "./subComponents/Sidebar";

export default function MainPage() {
  const markup = foundationContent.content[0];
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
