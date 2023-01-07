import { Button, Card } from "antd"
import styles from "./WideCard.module.css"

export default function WideCard() {
	return (
		<Card
			className={styles.cardContainer}
			extra={
				<Button href="#" className={styles.selectButton}>
					Select
				</Button>
			}
			title={
				<div className={styles.titleHolder}>
					<div className={styles.imageHolder}>
						<img src="https://www.theodinproject.com/assets/badge-foundations-21a2e04cbb0f20e4420bf13cd6593813ea6f97b0821e95ff238de3e6f26ff4bd.svg" />
					</div>
					<div className={styles.cardInformation}>
						<div className={styles.cardTag}>Start Here</div>
						<div className={styles.cardTitle}>Foundations</div>
					</div>
				</div>
			}
		>
			<p>{`This is where it all begins! A hands-on introduction to all of the essential tools you'll need to build real, working websites. You'll learn what web developers actually do and the foundations you'll need for later courses.`}</p>
		</Card>
	)
}
