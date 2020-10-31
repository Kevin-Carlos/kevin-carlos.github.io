import React, { FC } from "react";
import styled from "styled-components";
import { Section } from "common/layout/sections";
import { projectItems } from "./_project-items";
import { Link } from "gatsby";

interface ProjectDashboardProps {}

export const ProjectDashboard: FC<ProjectDashboardProps> = () => {
  return (
    <Section>
      <HeaderWrapper>
        <h1>Projects</h1>
        <ProjectGrid>
          {projectItems.map((i) => (
            <>
              {i.path ? (
                <CardLink to={i.path}>
                  <Card>
                    <h3>{i.name}</h3>
                    <p>{i.description}</p>
                  </Card>
                </CardLink>
              ) : (
                <Card>
                  <h3>{i.name}</h3>
                  <p>{i.description}</p>
                </Card>
              )}
            </>
          ))}
        </ProjectGrid>
      </HeaderWrapper>
    </Section>
  );
};

const HeaderWrapper = styled.div``;

const ProjectGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, 1fr);
  justify-self: center;

  ${({ theme }) => theme.mediaQuery.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  }
`;

const CardLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray};
`;

const Card = styled.div`
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.dark_teal};
  padding: 2rem;
  border-radius: 0.3rem;
  transition: box-shadow 0.25s ease-in-out, transform 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale3d(0.99, 0.99, 1);
    box-shadow: -2px 2px 5px rgba(255, 255, 255, 0.05);
  }

  & a {
    color: ${({ theme }) => theme.colors.blue};
  }

  &:last-child {
    color: ${({ theme }) => theme.colors.light_gray};
  }
`;
