import React from "react"
import IndexPage from "../../components/IndexPage/IndexPage"

import foundationIndex from "../api/courseContentAPI"
const Courses = () => {
	return <IndexPage {...foundationIndex} />
}

export default Courses
