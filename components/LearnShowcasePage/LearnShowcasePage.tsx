import React from "react"
import styles from "./LearnShowcasePage.module.css"
import LearnIMG from "../../public/assets/learn.png"
import workoutIMG from "../../public/assets/workout.png"
import Link from "next/link"
import Image from "next/image"
const LearnShowcasePage = () => {
	return (
		<div>
			<div className={styles.showcaseSection}>
				<div className={styles.showcaseContainer}>
					<div className={styles.showcaseTextContainer}>
						<div className={styles.showcaseTextHeading}>
							Learn everything you need to know
						</div>
					</div>
					<div className={styles.showcaseImageContainer}>
						<div>
							<Image
								className={styles.showcaseImage}
								src={
									"https://www.theodinproject.com/assets/badge-ruby-on-rails-5c5f3a237abf4d3d3cb3d7efc64cdbd9e493b876bd7a64c8b70977204d93ddaa.svg"
								}
								width={100}
								height={400}
								alt="Learn Image"
							/>
						</div>
						<div>
							<Image
								className={styles.showcaseImage}
								src={
									"https://www.theodinproject.com/assets/badge-ruby-on-rails-5c5f3a237abf4d3d3cb3d7efc64cdbd9e493b876bd7a64c8b70977204d93ddaa.svg"
								}
								width={100}
								height={400}
								alt="Workout Image"
							/>
						</div>
						<div>
							<Image
								className={styles.showcaseImage}
								src={
									"https://www.theodinproject.com/assets/badge-ruby-on-rails-5c5f3a237abf4d3d3cb3d7efc64cdbd9e493b876bd7a64c8b70977204d93ddaa.svg"
								}
								width={100}
								height={400}
								alt="Learn Image"
							/>
						</div>
						<div>
							<Image
								className={styles.showcaseImage}
								src={
									"https://www.theodinproject.com/assets/badge-ruby-on-rails-5c5f3a237abf4d3d3cb3d7efc64cdbd9e493b876bd7a64c8b70977204d93ddaa.svg"
								}
								width={100}
								height={400}
								alt="Learn Image"
							/>
						</div>
						<div>
							<Image
								className={styles.showcaseImage}
								src={
									"https://www.theodinproject.com/assets/badge-ruby-on-rails-5c5f3a237abf4d3d3cb3d7efc64cdbd9e493b876bd7a64c8b70977204d93ddaa.svg"
								}
								width={100}
								height={400}
								alt="Learn Image"
							/>
						</div>
						<div>
							<Image
								className={styles.showcaseImage}
								src={
									"https://www.theodinproject.com/assets/badge-ruby-on-rails-5c5f3a237abf4d3d3cb3d7efc64cdbd9e493b876bd7a64c8b70977204d93ddaa.svg"
								}
								width={100}
								height={400}
								alt="Learn Image"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LearnShowcasePage
