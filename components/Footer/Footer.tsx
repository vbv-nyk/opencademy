import React from "react"
import Image from "next/image"
import styles from "./Footer.module.css"

const Footer = () => {
	return (
		<div id="home" className={styles.footerContainer}>
			<div className={styles.footerHeader}>
				<div className={styles.footerContributionContainer}>
					<span className={styles.footerGithubHeading}>Opencademy</span>
					<span className={styles.footerProjectContent}>
						An open source intiative to get the best resource for you and
						everyone in india for free
					</span>
				</div>
				<div className={styles.footerSocialMedia}>
					<span className={styles.socialMediaText}>Contribute</span>
					<span className={styles.socialMediaHeading}>Github</span>
					<a
						style={{ marginTop: "1rem" }}
						href={"https://github.com/vbv-nyk/opencademy"}
					>
						<Image
							width={25}
							height={25}
							alt={"Instagram"}
							src={
								"https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
							}
						/>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
