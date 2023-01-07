import { Card } from "antd";
import styles from "./AssignmentCard.module.css";

export default function AssignmentCard() {
  const assignments = [
    {
      assignmentDesc:
        "To get some practice using lists, create a new HTML document and create the following lists:",
      subAssignments: [
        {
          name: `An unordered shopping list of your favorite foods`,
          videoURL: `https://www.youtube.com/watch?v=rIO5326FgPE`,
          imageURL: `https://css-tricks.com/almanac/properties/m/margin/`,
        },
        {
          name: `An unordered shopping list of your favorite foods`,
          videoURL: `https://www.youtube.com/watch?v=rIO5326FgPE`,
          imageURL: `https://css-tricks.com/almanac/properties/m/margin/`,
        },
        {
          name: `An unordered shopping list of your favorite foods`,
          videoURL: `https://www.youtube.com/watch?v=rIO5326FgPE`,
          imageURL: `https://css-tricks.com/almanac/properties/m/margin/`,
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
              <div className={styles.assignmentVideo}>
                {subAssignment.videoURL}
              </div>
              <div className={styles.assignmentImage}>
                {subAssignment.imageURL}
              </div>
            </div>
          </li>
        );
      }
    );
    return (
      <div key={id} className={styles.assignmentItem}>
        <div>{assignmentDesc}</div>
        <ul>{subAssignments}</ul>
      </div>
    );
  });

  return (
    <Card>
      <div className={styles.assignmentCard}>{assignmentsList}</div>
    </Card>
  );
}
