import React, { useState } from "react";
import { Button } from "antd";
import styles from "./StreamModal.module.css";

const StreamModal: React.FC = () => {
  return (
    <div className={styles.modalOverlay}>
      <div
        className={styles.modalContainer}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.modalHeader}>Stream Choice</div>
        <div className={styles.modalBody}>
          <div className={styles.courseContainer}>
            <img
              src="https://media.discordapp.net/attachments/893444140770144267/1061022078549102663/image.png?width=367&height=423"
              className={styles.courseImage}
            ></img>
            <div className={styles.courseName}>Science</div>
          </div>
          <div className={styles.courseContainer}>
            <img
              src="https://media.discordapp.net/attachments/893444140770144267/1061022078549102663/image.png?width=367&height=423"
              className={styles.courseImage}
            ></img>
            <div className={styles.courseName}>Commerce</div>
          </div>
          <div className={styles.courseContainer}>
            <img
              src="https://media.discordapp.net/attachments/893444140770144267/1061022078549102663/image.png?width=367&height=423"
              className={styles.courseImage}
            ></img>
            <div className={styles.courseName}>Arts</div>
          </div>
        </div>
        <div className={styles.modalFooter}>For class wise..</div>
      </div>
    </div>
  );
};

export default StreamModal;
