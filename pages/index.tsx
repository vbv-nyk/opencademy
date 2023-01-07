import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import WideCard from "../components/subComponents/wideCard/WideCard";
import StreamOverlay from "../components/subComponents/streamChoiceOverlay/StreamOverlay";

export default function Home() {
  return <StreamOverlay />;
}
