import React, { useState } from "react"
import { Button } from "antd"
import styles from "./StreamModal.module.css"
import Image from "next/image"
import Link from "next/link"

const StreamModal: React.FC = ({ handleCurriculum }: any) => {
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
						color: "white",
						cursor: "pointer",
						left: "10%",
						margin: "1rem",
					}}
				>
					back
				</div>
				<div className={styles.modalHeader}>Stream Choice</div>
				<div className={styles.modalBody}>
					<Link href={"/paths"} className={styles.courseContainer}>
						<Image
							src="https://cdn-icons-png.flaticon.com/512/3870/3870658.png"
							className={styles.courseImage}
							height={700}
							width={180}
							alt="CouseImage"
						/>
						<div className={styles.courseName}>Science</div>
					</Link>
					<div className={styles.courseContainer}>
						<Image
							src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
							className={styles.courseImage}
							height={200}
							width={300}
							alt="CouseImage"
						/>
						<div className={styles.courseName}>Commerce</div>
					</div>
					<div className={styles.courseContainer}>
						<Image
							src="https://cdn-icons-png.flaticon.com/512/7514/7514333.png"
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
