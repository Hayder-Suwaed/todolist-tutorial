import React, { useState } from "react";
import { useSelectedProjctValue, useProjctsValue } from "../context";

export const Projects = ({ activeValue = null }) => {
    const [active, setActive] = useState(activeValue);
    const { setSelectedProject } = useSelectedProjctValue();
    const { projects } = useProjctsValue();


  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        data-testid="project-action"
        className={
          active === project.projectId
            ? "active sidebare__project"
            : "sidebare__project"
        }
        onKeyDown={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
        }}
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
        }}
      >
        {'Project', JSON.stringify(projects)}
      </li>
    ))
  );
};
