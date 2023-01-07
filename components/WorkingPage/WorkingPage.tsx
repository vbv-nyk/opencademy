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
							This website is a compilation of the best resources we could find
							online, organized in a logical order to aid self-guided learning.
							We wish we had had access to something like this when we were
							learning on our own.
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
							<div className={styles.siteWorkingTitle}>Gain knowledge</div>
							<div className={styles.siteWorkingContent}>
								Gain knowledge from a carefully selected collection of online
								tutorials, blogs, and courses.
							</div>
						</div>
						<div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
							<div className={styles.siteWorkingTitle}>Assignments</div>
							<div className={styles.siteWorkingContent}>
								Acquire knowledge from a curriculum that has carefully selected
								the best online tutorials, blogs, and courses.
							</div>
						</div>
						<div>
							<div className={styles.siteWorkingTitle}>
								Establish a connection
							</div>
							<div className={styles.siteWorkingContent}>
								Join our supportive community of beginner and experienced people
								and receive assistance as you learn.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WorkingPage
