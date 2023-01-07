import React from "react"
import styles from "./WorkingPage.module.css"
import LearnIMG from "../../public/assets/learn.png"
import workoutIMG from "../../public/assets/workout.png"
import Link from "next/link"
import Image from "next/image"
const WorkingPage = () => {
	return (
		<div>
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

export default WorkingPage
