import * as React from "react";
import styled from "styled-components";
import { TopNavigation } from "./TopNavigation";
import { SideNavigation } from "./SideNavigation";
import { TaskColumn } from "./TaskColumn";

const taskColumns = [
  {
    title: "Todo",
    status: "warning",
    count: 0,
    borderColor: "#ffad0d",
  },
  {
    title: "In Progress",
    status: "info",
    count: 0,
    borderColor: "#0c6fbf",
  },
  {
    title: "Completed",
    status: "success",
    count: 0,
    borderColor: "#2a7e2e",
  },
];

export default function TaskBoard() {
  return (
    <TaskBoardLayout>
      <TopNavigation />
      <main className="task-board-content">
        <SideNavigation />
        <TaskColumnsContainer>
          {taskColumns.map((column, index) => (
            <TaskColumn key={index} {...column} />
          ))}
        </TaskColumnsContainer>
      </main>
    </TaskBoardLayout>
  );
}

const TaskBoardLayout = styled.div`
  background: var(--Generic-White-BG, #f6f6f6);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const TaskColumnsContainer = styled.section`
  display: flex;
  gap: 20px;
  padding: 20px;
  flex: 1;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
