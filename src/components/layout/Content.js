import React from "react";
import { Sidebar } from "./Sidebar";
import { Tasks } from "../../components/Tasks";

export const Content = () => (
  <section>
    <Sidebar />
    <Tasks />
  </section>
);
