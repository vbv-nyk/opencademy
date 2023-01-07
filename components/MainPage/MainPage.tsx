import { foundationContent } from "../../pages/api/courseContentAPI";
import Header from "../Header/Header";
import styles from "./MainPage.module.css";
import Sidebar from "./subComponents/Sidebar";

export default function MainPage() {
  const markup = foundationContent.content;
  return (
    <div>
      <Header />
      <div className={styles.mainPageContainer}>
        <div>{markup}</div>
        <Sidebar />
      </div>
    </div>
  );
}
