import React from "react"
import IndexPage from "../../components/IndexPage/IndexPage"
import { foundationIndex } from "../api/courseContentAPI"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
const Courses = () => {
	return (
		<div>
			<Header />
			<IndexPage {...foundationIndex} />
			<Footer />
		</div>
	)
}

export default Courses
