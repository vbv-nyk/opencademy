import React from "react"
import styles from "./Header.module.css"
import Image from "next/image"
import parallelSelectionLogo from "../../public/codecademy.svg"
import Link from "next/link"

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Link href="/">
						<Image
							className={styles.parallelSelectionLogo}
							src={parallelSelectionLogo}
							alt="Parallel Selection Logo"
						/>
					</Link>
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
