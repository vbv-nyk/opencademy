import Header from "../Header/Header";
import AssignmentCard from "../subComponents/assignmentCard/AssignmentCard";
import styles from "./IndexPage.module.css";
import IndexCard from "./subcomponents/IndexCard";

interface Props {
  courseOverview: string;
  src: string;
  courseName: string;
  pageIndex: Array<any>;
}
export default function IndexPage({ ...props }: Props) {
  return (
    <div>
      <Header />
      <div className={styles.indexPage}>
        <img src={props.src} />
        <div className={styles.courseName}>{props.courseName}</div>
        <div className={styles.overviewHeader}>Overview</div>
        <div className={styles.courseOverview}>{props.courseOverview}</div>
        <IndexCard {...props} />
      </div>
    </div>
  );
}
