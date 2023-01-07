import React, { useState } from "react"
import { Button } from "antd"
import styles from "./StreamModal.module.css"
import Image from "next/image"
import Link from "next/link"

const StreamModal: React.FC = ({ handleCurriculum }) => {
	return (
		<div className={styles.modalOverlay}>
			<div
				className={styles.modalContainer}
				onClick={(e) => {
					e.stopPropagation()
				}}
			>
				<div
					onClick={handleCurriculum}
					style={{
						color: "#fff",
						position: "relative",
						left: "10%",
						fontWeight: "600",
						marginTop: "2rem",
						cursor: "pointer",
					}}
				>
					back
				</div>
				<div className={styles.modalHeader}>Stream Choice</div>
				<div className={styles.modalBody}>
					<Link href={"/paths"} className={styles.courseContainer}>
						<Image
							src="https://media.discordapp.net/attachments/893444140770144267/1061022078549102663/image.png?width=367&height=423"
							className={styles.courseImage}
							height={700}
							width={180}
							alt="CouseImage"
						/>
						<div className={styles.courseName}>Science</div>
					</Link>
					<div className={styles.courseContainerDisable}>
						<Image
							src="https://media.discordapp.net/attachments/893444140770144267/1061022078549102663/image.png?width=367&height=423"
							className={styles.courseImage}
							height={700}
							width={180}
							alt="CouseImage"
						/>
						<div className={styles.courseName}>Commerce</div>
					</div>
					<div className={styles.courseContainerDisable}>
						<Image
							src="https://media.discordapp.net/attachments/893444140770144267/1061022078549102663/image.png?width=367&height=423"
							className={styles.courseImage}
							height={700}
							width={180}
							alt="CouseImage"
						/>
						<div className={styles.courseName}>Arts</div>
					</div>
				</div>
				<div className={styles.modalFooter}>For class wise..</div>
			</div>
		</div>
	)
}

export default StreamModal
