import * as React from "react";
import styled from "styled-components";

const navItems = [
  {
    title: "Home",
    icon: "https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/16038dc5a2bd8ba42231354a52c8e7383df401a38853664dae4af95ae3bc4cca?apiKey=2570cc01a2d54370b17b865e3b47fdd6&",
    active: false,
  },
  {
    title: "Tasks",
    icon: "https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/c234268110c7f1e94384d10ba35ae7e82ac2a3662bc532bbb3ed766d1f89ce10?apiKey=2570cc01a2d54370b17b865e3b47fdd6&",
    active: true,
  },
  {
    title: "Report",
    icon: "https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/af7caae84a00dce25e5569dfd13161d351e5cb9fa0a71306366a2a6fd80a1de0?apiKey=2570cc01a2d54370b17b865e3b47fdd6&",
    active: false,
  },
  {
    title: "Insights",
    icon: "https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/83c9d1cee73cae26306b371fc5ebaa478739f667c3351ba9df8333db011bc83f?apiKey=2570cc01a2d54370b17b865e3b47fdd6&",
    active: false,
  },
  {
    title: "Inbox",
    icon: "https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/9ee9c62429f39fd6fbf7a42f2efab8e63fa505cc80bbf7a9e59b56dc3c38bbdf?apiKey=2570cc01a2d54370b17b865e3b47fdd6&",
    active: false,
  },
  {
    title: "Settings",
    icon: "https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/4c892f46f8d8855fd7a53a49b2ecc37ac4f566fd5a907b334ac2791e8aa32efd?apiKey=2570cc01a2d54370b17b865e3b47fdd6&",
    active: false,
  },
];

export function SideNavigation() {
  return (
    <NavContainer>
      {navItems.map((item, index) => (
        <NavItem key={index} $active={item.active} role="button" tabIndex={0}>
          <NavIcon loading="lazy" src={item.icon} alt={`${item.title} icon`} />
          <NavText>{item.title}</NavText>
        </NavItem>
      ))}
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  border-right: 1px solid var(--Dark-50, #efefef);
  background: var(--Generic-White, #fff);
  display: flex;
  flex-direction: column;
  padding: 48px 24px;
  gap: 16px;

  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background: ${(props) =>
    props.$active
      ? "var(--Primary-500, #0359e0)"
      : "var(--Generic-White-BG, #f6f6f6)"};
  color: ${(props) =>
    props.$active ? "var(--Generic-White, #fff)" : "var(--Dark-400, #474747)"};
  font: 600 16px Inter, sans-serif;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const NavIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const NavText = styled.span`
  flex: 1;
`;
