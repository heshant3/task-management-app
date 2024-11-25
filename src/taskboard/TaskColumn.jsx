import * as React from "react";
import styled from "styled-components";

export function TaskColumn({ title, status, count, borderColor }) {
  return (
    <ColumnContainer>
      <ColumnHeader>
        <HeaderContent>
          <StatusSection>
            <StatusIndicator $borderColor={borderColor} />
            <ColumnTitle>{title}</ColumnTitle>
          </StatusSection>
          <TaskCount>{count}</TaskCount>
        </HeaderContent>
        <OptionsIcon
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/5bd86eebc1c3d850ee2cc5b886ef1895e3f5ce5c17dc4b0942050612798f20cd?apiKey=2570cc01a2d54370b17b865e3b47fdd6&"
          alt="Options"
        />
      </ColumnHeader>

      <AddTaskButton>
        <AddIcon
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/97e38da365f906f7372d8019054f05a26f0c47a332e81331160df5e6c19b104f?apiKey=2570cc01a2d54370b17b865e3b47fdd6&"
          alt="Add task"
        />
        <span>Add task</span>
      </AddTaskButton>
    </ColumnContainer>
  );
}

const ColumnContainer = styled.article`
  border-radius: 12px;
  border: 1px dashed var(--Dark-100, #c8c8c8);
  background: var(--Generic-White-BG, #f6f6f6);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
`;

const ColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  background: var(--Generic-White, #fff);
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StatusSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StatusIndicator = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.$borderColor};
  background: var(--Generic-White, #fff);
`;

const ColumnTitle = styled.h2`
  color: var(--Dark-500, #1c1c1c);
  font: 600 20px Inter, sans-serif;
  margin: 0;
`;

const TaskCount = styled.span`
  padding: 0 6px;
  border-radius: 56px;
  background: var(--Primary-50, #f2f6fd);
  color: var(--Primary-500, #0359e0);
  font: 600 13px Inter, sans-serif;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OptionsIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const AddTaskButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background: var(--Generic-White-BG, #f6f6f6);
  color: var(--Dark-300, #727272);
  font: 600 16px Inter, sans-serif;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    opacity: 0.9;
  }
`;

const AddIcon = styled.img`
  width: 24px;
  height: 24px;
`;
