import { useRouter } from "next/router"
import MainPage from "../components/MainPage/MainPage"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

export default function MainContent() {
	const router = useRouter()
	return (
		<div>
			<Header />
			<MainPage
				id={router.query.id}
				dataPath={router.query.dataPath}
				title={router.query.title}
				subSection={router.query.subSection}
			/>
			<Footer />
		</div>
	)
}
