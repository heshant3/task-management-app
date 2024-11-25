import React from "react";
import styled from "styled-components";

export function TaskCard({
  title,
  description,
  date,
  priority,
  status,
  dueText,
}) {
  return (
    <Card>
      <CardHeader>
        <TaskIcon
          src="https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/eee4fae3583cc82bf5af69bbde700a43a8a5277be2a39250b91e910931d18566?apiKey=2570cc01a2d54370b17b865e3b47fdd6&"
          alt=""
        />
        <TaskTitle>{title}</TaskTitle>
      </CardHeader>

      <CardContent>
        <Description>{description}</Description>
        <MetaInfo>
          <ProfileGroup>
            <ProfileImage
              src="https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/e3b6e7280294a6a4adf04eb376f37d459b337db86242eb12fea78a85ad86fc64?apiKey=2570cc01a2d54370b17b865e3b47fdd6&"
              alt="User avatar"
            />
            <Date $status={status}>{date}</Date>
          </ProfileGroup>
          <PriorityBadge $priority={priority}>{priority}</PriorityBadge>
        </MetaInfo>
      </CardContent>

      {dueText && (
        <DueDate>
          <ClockIcon
            src="https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/7dca34f4a22ef4ffdbd58c60a772a9d115717e34c0d589aad5b67ed983b0e079?apiKey=2570cc01a2d54370b17b865e3b47fdd6&"
            alt="Clock"
          />
          <DueText>{dueText}</DueText>
        </DueDate>
      )}
    </Card>
  );
}

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const CardHeader = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const TaskIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const TaskTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;

const CardContent = styled.div`
  margin-top: 16px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #6e6e6e;
`;

const MetaInfo = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const ProfileImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const Date = styled.span`
  color: ${(props) =>
    props.$status === "warning" ? "orange" : props.$status === "info" ? "blue" : "green"};
`;

const PriorityBadge = styled.span`
  background-color: ${(props) =>
    props.$priority === "High" ? "red" : props.$priority === "Medium" ? "yellow" : "green"};
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
`;

const DueDate = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const ClockIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;

const DueText = styled.span`
  font-size: 14px;
  color: #727272;
`;
