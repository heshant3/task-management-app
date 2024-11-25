import * as React from "react";
import styled from "styled-components";

export function TopNavigation() {
  return (
    <header>
      <NavContainer>
        <NavSection>
          <LogoContainer>
            <LogoImage
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/f04432c0a4e1efb6c6bd0810044a1ce86e4e2cd0f269d861b29dc1877a9bad4a?apiKey=2570cc01a2d54370b17b865e3b47fdd6&"
              alt="Code94 Labs Logo"
            />
            <LogoText>Code94 Labs</LogoText>
          </LogoContainer>

          <SearchContainer role="search">
            <SearchIcon
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/d508d6ec6972cfdc423700991cda63adb74b454ef7eee40d56bd6bc98bf62e1d?apiKey=2570cc01a2d54370b17b865e3b47fdd6&"
              alt="Search Icon"
            />
            <SearchInput
              type="search"
              placeholder="Search tasks"
              aria-label="Search tasks"
            />
          </SearchContainer>
        </NavSection>

        <ProfileSection>
          <NotificationIcon
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/20b2fe41dd61c08c0efdb1b13620d3f59933f0c0e560b0b5cdf88d5969367a70?apiKey=2570cc01a2d54370b17b865e3b47fdd6&"
            alt="Notifications"
          />
          <ProfileImage
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/246f78dcb612ee8a7751f5610f402042ce40208fb62b69260587b3054976b03b?apiKey=2570cc01a2d54370b17b865e3b47fdd6&"
            alt="User profile"
          />
        </ProfileSection>
      </NavContainer>
    </header>
  );
}

const NavContainer = styled.nav`
  border-bottom: 1px solid var(--Dark-50, #efefef);
  background: var(--Generic-White, #fff);
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const NavSection = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const LogoContainer = styled.div`
  border-right: 1px solid var(--Dark-50, #efefef);
  background: var(--Generic-White, #fff);
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 16px 24px;

  @media (max-width: 991px) {
    padding: 16px 20px;
  }
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
`;

const LogoText = styled.span`
  color: var(--Dark-500, #1c1c1c);
  font: 600 20px Inter, sans-serif;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  border: 1px solid var(--Dark-50, #efefef);
  background: var(--Generic-White, #fff);
  padding: 12px;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  color: var(--Dark-300, #727272);
  font: 400 16px Inter, sans-serif;
  outline: none;
  width: 100%;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  border-radius: 48px;
  border: 1px solid var(--Generic-White-BG, #f6f6f6);
  background: var(--Generic-White, #fff);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.04);
  padding: 4px 8px;
`;

const NotificationIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
