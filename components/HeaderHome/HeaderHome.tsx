import React from "react"
import styles from "./HeaderHome.module.css"
import Image from "next/image"
import parallelSelectionLogo from "../../public/codecademy.svg"
import Link from "next/link"

const HeaderHome = () => {
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
							<Link href="/paths">Courses</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default HeaderHome
