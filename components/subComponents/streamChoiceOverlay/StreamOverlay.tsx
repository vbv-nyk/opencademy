import StreamModal from "./subcomponents/StreamModal";
import styles from "./StreamOverlay.module.css";
import { useState } from "react";
import { Button } from "antd";

export default function StreamOverlay() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOverlayOpen(true)}
        className={styles.viewCurriculumButton}
      >
        View Curriculum
      </Button>
      <div onClick={() => setOverlayOpen(false)}>
        {overlayOpen && <StreamModal />}
      </div>
    </>
  );
}
