import React from "react";
import styled from "styled-components";
import { TopNavigation } from "./TopNavigation";
import { SideNavigation } from "./SideNavigation";
import { TaskColumn } from './TaskColumn';  // Corrected import of TaskColumn

const todoTasks = [
  {
    title: "Project setup and initial configurations",
    description:
      "Pellentesque varius ante posuere risus pellentesque mollis. Curabitur ultricee...",
    date: "Aug 11",
    priority: "High",
    status: "warning",
    dueText: "Should've completed yesterday",
  },
];

const inProgressTasks = [
  {
    title: "Project setup and initial configurations",
    description:
      "Pellentesque varius ante posuere risus pellentesque mollis. Curabitur ultricee...",
    date: "Aug 16",
    priority: "Medium",
    status: "info",
    dueText: "Should complete within 4 days",
  },
];

const completedTasks = [
  {
    title: "Project setup and initial configurations",
    description:
      "Pellentesque varius ante posuere risus pellentesque mollis. Curabitur ultricee...",
    date: "Aug 11",
    priority: "Low",
    status: "success",
  },
];

const columns = [
  { title: "Todo", tasks: todoTasks, count: 3, status: "warning" },
  { title: "In Progress", tasks: inProgressTasks, count: 2, status: "info" },
  { title: "Completed", tasks: completedTasks, count: 4, status: "success" },
];

export default function TaskBoard() {
  return (
    <TaskBoardLayout>
      <TopNavigation />
      <Main>
        <SideNavigation />
        <TaskBoardContent>
          {columns.map((column, index) => (
            <TaskColumn key={index} {...column} />
          ))}
        </TaskBoardContent>
      </Main>
    </TaskBoardLayout>
  );
}

const Main = styled.main`

  display: flex;
  flex: 1;
`;

const TaskBoardLayout = styled.div`
  background: var(--Generic-White-BG, #f6f6f6);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const TaskBoardContent = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 32px;
  width: 100%;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;
