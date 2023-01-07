import { Inter } from "@next/font/google";
import { path } from "./api/pathAPI";
import LongCard from "../components/longCard/LongCard";
import HomePage from "./HomePage";
import WideCard from "../components/subComponents/wideCard/WideCard";

export default function Home() {
  const WideCards = path.map((pathItem, index) => {
    return <WideCard key={index} {...pathItem} />;
  });
  return WideCards;
}
