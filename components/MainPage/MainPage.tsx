import { foundationContent } from "../../pages/api/courseContentAPI"
import Header from "../Header/Header"
import styles from "./MainPage.module.css"
import Sidebar from "./subComponents/Sidebar"
import ReactHtmlParser from "react-html-parser"

export default function MainPage(props: any) {
	const markup = props.dataPath
	return (
		<div className={styles.mainContainer}>
			<div className={styles.mainPageContainer}>
				<div className={styles.lessonInformation}>
					<div className={styles.mainTitle}>{props.title}</div>
					<div className={styles.subTitle}>{props.subSection}</div>
				</div>
				<div className={styles.ingeniousMarkUp}>{ReactHtmlParser(markup)}</div>
				<div className={styles.sidebarContainer}>
					<Sidebar />
				</div>
			</div>
		</div>
	)
}
