import React from "react";
import { firebase } from "../firebase";

export const Checkbox = ({ id }) => {
  const archivedTask = () => {
    firebase.firestore().collection("tasks").doc(id).update({
      archived: true,
    });
  };

  return (
    <div
      className="checkbo-holder"
      data-testid="checkbo-action"
      onClick={() => archivedTask()}
    >
      <span className="checkbox " />
    </div>
  );
};