import React from "react";
import styled from "styled-components";
import { TaskCard } from "./TaskCard";

export function TaskColumn({ title, tasks, count, status }) {
  return (
    <Column>
      <ColumnHeader>
        <HeaderContent>
          <StatusGroup>
            <StatusDot $status={status} />
            <ColumnTitle>{title}</ColumnTitle>
          </StatusGroup>
          <TaskCount>{count}</TaskCount>
        </HeaderContent>
        <OptionsButton
          src="https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/5bd86eebc1c3d850ee2cc5b886ef1895e3f5ce5c17dc4b0942050612798f20cd?apiKey=2570cc01a2d54370b17b865e3b47fdd6&"
          alt="More options"
        />
      </ColumnHeader>

      {tasks.map((task, index) => (
        <TaskCard key={index} {...task} />
      ))}

      <AddTaskButton>
        <AddIcon
          src="https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/97e38da365f906f7372d8019054f05a26f0c47a332e81331160df5e6c19b104f?apiKey=2570cc01a2d54370b17b865e3b47fdd6&"
          alt=""
        />
        <span>Add task</span>
      </AddTaskButton>
    </Column>
  );
}

const Column = styled.article`
  border-radius: 12px;
  border: 1px dashed var(--Dark-100, #c8c8c8);
  background: var(--Generic-White-BG, #f6f6f6);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ColumnHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #fff;
  border-radius: 8px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StatusGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StatusDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid
    ${(props) => {
      switch (props.$status) {
        case "warning":
          return "var(--Status-Warning-500, #ffad0d)";
        case "info":
          return "var(--Status-Info-500, #0c6fbf)";
        case "success":
          return "var(--Status-Success-500, #2a7e2e)";
        default:
          return "#ccc";
      }
    }};
  background: #fff;
`;

const ColumnTitle = styled.h2`
  font: 600 20px Inter, sans-serif;
  color: var(--Dark-500, #1c1c1c);
  margin: 0;
`;

const TaskCount = styled.span`
  background: var(--Primary-50, #f2f6fd);
  color: var(--Primary-500, #0359e0);
  padding: 0 6px;
  border-radius: 56px;
  font: 600 13px Inter, sans-serif;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OptionsButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const AddTaskButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px;
  background: var(--Generic-White-BG, #f6f6f6);
  border: none;
  border-radius: 8px;
  color: var(--Dark-300, #727272);
  font: 600 16px Inter, sans-serif;
  cursor: pointer;

  &:hover {
    background: var(--Generic-White-BG, #f0f0f0);
  }
`;

const AddIcon = styled.img`
  width: 24px;
  height: 24px;
`;
