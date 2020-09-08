import React from "react";
import { Content } from "./components/layout/Content";
import { Header } from "./components/layout/Header";
import "./App.scss";
import { SelectedProjectProvider } from "./context/selected-project-context";
import { ProjectsProvider } from "./context";

export const App = () => (
  <SelectedProjectProvider>
    <ProjectsProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </ProjectsProvider>
  </SelectedProjectProvider>
);
