import { Card } from "antd";
import styles from "./AssignmentCard.module.css";

export default function AssignmentCard() {
  const assignments = [
    {
      assignmentDesc:
        "Please ensure that you have completed all of the following questions before moving on. To gain a deeper understanding of the material, it is recommended that you read the provided articles and watch the relevant videos.",
      subAssignments: [
        {
          name: `A ball is thrown with an initial velocity of 10 m/s at an angle of 45 degrees above the horizontal. Using vector addition, calculate the resulting displacement of the ball after 2 seconds.`,
          videoURL: `https://byjus.com/physics/distance-and-displacement/`,
          imageURL: `https://i.pinimg.com/736x/a0/80/17/a0801720139d080287ed0f456dafc124--science-revision-teaching-science.jpg`,
        },
        {
          name: `A car travels 60 km due east and then 90 km due north. Calculate the final displacement of the car from its starting point using vector subtraction.`,
          imageURL: `https://www.youtube.com/watch?v=PQ8EDm6g-GU`,
          videoURL: `https://www.youtube.com/watch?v=21BwUNDOQno`,
        },
        {
          name: `A vector has a magnitude of 5 units and a direction of 30 degrees. Find the x and y components of the vector using trigonometry.`,
          videoURL: `https://www.youtube.com/watch?v=21BwUNDOQno`,
          imageURL: `https://byjus.com/physics/distance-and-displacement/`,
        },
      ],
    },
  ];
  const assignmentsList = assignments.map((assignment, id) => {
    const assignmentDesc = assignment.assignmentDesc;
    const subAssignments = assignment.subAssignments.map(
      (subAssignment, id) => {
        return (
          <li key={id}>
            <div className={styles.assignmentInfo}>
              <div className={styles.assignmentName}>{subAssignment.name}</div>
              <a
                className={styles.assignmentVideo}
                href={subAssignment.videoURL}
              >
                {subAssignment.videoURL}
              </a>
              <a
                className={styles.assignmentImage}
                href={subAssignment.imageURL}
              >
                {subAssignment.imageURL}
              </a>
            </div>
          </li>
        );
      }
    );
    return (
      <div key={id} className={styles.assignmentItem}>
        <div className={styles.assignmentDesc}>{assignmentDesc}</div>
        <ul>{subAssignments}</ul>
      </div>
    );
  });

  return (
    <div>
      <div className={styles.assignmentHeader}>Assignment</div>
      <Card className={styles.assignmentCard}>
        <div>{assignmentsList}</div>
      </Card>
    </div>
  );
}
