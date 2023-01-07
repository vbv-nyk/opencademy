import React, { useEffect, useState } from "react"
import HeaderHome from "../components/HeaderHome/HeaderHome"
import styles from "../styles/Home.module.css"
import MainBG from "../public/assets/mainpagebg.png"
import PaperMashe from "../public/assets/papermashe.svg"

import Footer from "../components/Footer/Footer"
import Image from "next/image"
import Link from "next/link"
import StreamModal from "../components/subComponents/streamChoiceOverlay/subcomponents/StreamModal"
import WorkingPage from "../components/WorkingPage/WorkingPage"
import LearnShowcasePage from "../components/LearnShowcasePage/LearnShowcasePage"

export default function Home() {
	const [curriculumModal, setCurriculumModal] = useState(false)

	const handleCurriculum = () => {
		setCurriculumModal(!curriculumModal)
	}
	return (
		<div>
			<HeaderHome />
			{curriculumModal ? (
				<StreamModal handleCurriculum={handleCurriculum} />
			) : (
				<></>
			)}
			<div className={styles.mainContainer}>
				<Image className={styles.mainBG} src={MainBG} alt="BackgroundImage" />
				<div className={styles.container}>
					<div className={styles.abstractDesign}></div>
					<div className={styles.headingContainer}>
						<div>
							<div className={styles.mainTitle}>Opencademy</div>
							<div className={styles.mainSubText}>
								Our open source community offers free, passionate support for
								our curriculum.
							</div>
						</div>
						<Image
							className={styles.paperImage}
							src={PaperMashe}
							alt="papermashe"
						/>
					</div>

					<div className={styles.buttonContainer}>
						<div onClick={handleCurriculum} className={styles.button}>
							View Curriculum
						</div>
						<div className={styles.abstractDesign}></div>
					</div>
				</div>
			</div>
			{/* Second Section Working Section */}
			<WorkingPage />
			<LearnShowcasePage />
			<Footer />
		</div>
	)
}
