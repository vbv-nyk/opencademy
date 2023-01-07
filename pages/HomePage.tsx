import React, { useEffect, useState } from "react"
import HeaderHome from "../components/HeaderHome/HeaderHome"
import styles from "../styles/Home.module.css"
import MainBG from "../public/assets/mainpagebg.png"
import PaperMashe from "../public/assets/papermashe.svg"
import LearnIMG from "../public/assets/learn.png"
import workoutIMG from "../public/assets/workout.png"
import Image from "next/image"

const HomePage = () => {
	return (
		<div>
			<HeaderHome />
			<div className={styles.mainContainer}>
				<Image className={styles.mainBG} src={MainBG} alt="BackgroundImage" />
				<div className={styles.container}>
					<div className={styles.abstractDesign}></div>
					<div className={styles.headingContainer}>
						<div>
							<div className={styles.mainTitle}>Opencademy</div>
							<div className={styles.mainSubText}>
								Our curriculum is free and supported by a passionate open source
								community.
							</div>
						</div>
						<Image
							className={styles.paperImage}
							src={PaperMashe}
							alt="papermashe"
						/>
					</div>
					<div className={styles.buttonContainer}>
						<div className={styles.button}>View Curriculum</div>
						<div className={styles.abstractDesign}></div>
					</div>
				</div>
			</div>
			<div className={styles.workingSection}>
				<div className={styles.workingContainer}>
					<div className={styles.workingTextContainer}>
						<div className={styles.workingTextHeading}>How it works</div>
						<div className={styles.workingTextContent}>
							This is the website we wish we had when we were learning on our
							own. We scour the internet looking for only the best resources to
							supplement your learning and present them in a logical order.
						</div>
					</div>
					<div className={styles.workingImageContainer}>
						<div>
							<Image
								className={styles.workingImage}
								src={LearnIMG}
								alt="Learn Image"
							/>
						</div>
						<div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
							<Image
								className={styles.workingImage}
								src={workoutIMG}
								alt="Workout Image"
							/>
						</div>
						<div>
							<Image
								className={styles.workingImage}
								src={LearnIMG}
								alt="Learn Image"
							/>
						</div>
					</div>

					<div className={styles.siteWorkingContainer}>
						<div>
							<div className={styles.siteWorkingTitle}>Learn</div>
							<div className={styles.siteWorkingContent}>
								Learn from a curriculum with the best curated online tutorials,
								blogs, and courses.
							</div>
						</div>
						<div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
							<div className={styles.siteWorkingTitle}>Workout </div>
							<div className={styles.siteWorkingContent}>
								Learn from a curriculum with the best curated online tutorials,
								blogs, and courses.
							</div>
						</div>
						<div>
							<div className={styles.siteWorkingTitle}>Connect</div>
							<div className={styles.siteWorkingContent}>
								Learn from a curriculum with the best curated online tutorials,
								blogs, and courses.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomePage
