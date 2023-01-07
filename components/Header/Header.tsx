import React from "react"
import styles from "./Header.module.css"
import Image from "next/image"
import parallelSelectionLogo from "../../public/codecademy.svg"

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<a href="index.html">
						<Image
							className={styles.parallelSelectionLogo}
							src={parallelSelectionLogo}
							alt="Parallel Selection Logo"
						/>
					</a>
				</div>
				<nav className={styles.navbarContainer}>
					<ul className={styles.navItems}>
						<li className={styles.blogLink}>
							<a href="blog.html">Community</a>
						</li>
						<li className={styles.askButton}>
							<a href="askquestion.html">Get Started</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
