import { Inter } from "@next/font/google";
import { path } from "./api/pathAPI";
import LongCard from "../components/longCard/LongCard";
import HomePage from "./HomePage";
import WideCard from "../components/subComponents/wideCard/WideCard";
import { foundationIndex } from "./api/courseContentAPI";
import IndexPage from "../components/IndexPage/IndexPage";

export default function Home() {
  return <IndexPage {...foundationIndex} />;
}
