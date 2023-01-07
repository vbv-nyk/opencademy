import { useRouter } from "next/router";
import MainPage from "../components/MainPage/MainPage";

export default function MainContent() {
  const router = useRouter();
  return <MainPage id={router.query.id} dataPath={router.query.dataPath} />;
}
