import styles from "./IndexPage.module.css";
import IndexCard from "./subcomponents/IndexCard";

interface Props {
  courseOverview: string;
  pageIndex: Array<Object>;
}
export default function IndexPage({ ...props }: Props) {
  return <IndexCard {...props} />;
}
