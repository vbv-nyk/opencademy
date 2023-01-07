import Link from "next/link";
import { foundationContent } from "../../../pages/api/courseContentAPI";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const links = foundationContent.sections.map((section, index) => {
    return (
      <Link key={index} href={`#${index}`} className={styles.listItem}>
        {section}
      </Link>
    );
  });
  return (
    <div className={styles.sidebar}>
      <div className="title">Navigation Bar</div>
      {links}
    </div>
  );
}
