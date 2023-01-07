import React from "react"
import styles from "./LearnShowcasePage.module.css"
import LearnIMG from "../../public/assets/learn.png"
import jeeIMG from "../../public/svg/jee.svg"
import advanceIMG from "../../public/svg/advance.svg"
import gateIMG from "../../public/svg/gate.svg"
import neetIMG from "../../public/svg/neet.svg"
import cetIMG from "../../public/svg/cet.svg"
import kvpyIMG from "../../public/svg/kvpy.svg"
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
								src={jeeIMG}
								width={100}
								height={400}
								alt="Learn Image"
							/>
						</div>
						<div>
							<Image
								className={styles.showcaseImage}
								src={advanceIMG}
								width={100}
								height={400}
								alt="Workout Image"
							/>
						</div>
						<div>
							<Image
								className={styles.showcaseImage}
								src={kvpyIMG}
								width={100}
								height={400}
								alt="Learn Image"
							/>
						</div>
						<div>
							<Image
								className={styles.showcaseImage}
								src={neetIMG}
								width={100}
								height={400}
								alt="Learn Image"
							/>
						</div>
						<div>
							<Image
								className={styles.showcaseImage}
								src={cetIMG}
								width={100}
								height={400}
								alt="Learn Image"
							/>
						</div>
						<div>
							<Image
								className={styles.showcaseImage}
								src={gateIMG}
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
