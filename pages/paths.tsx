import React, { useEffect, useState } from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

import PathSelection from "../components/PathSelection/PathSelection"

const landing = () => {
	return (
		<div>
			<Header />
			<PathSelection />
			<Footer />
		</div>
	)
}

export default landing
