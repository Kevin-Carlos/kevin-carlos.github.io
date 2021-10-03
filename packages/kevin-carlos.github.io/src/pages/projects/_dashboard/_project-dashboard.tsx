import React, { FC } from 'react';
import styled from 'styled-components';
import { Section } from 'common/layout/sections';
import { projectItems } from './_project-items';
import { Link } from 'gatsby';

export const ProjectDashboard: FC = () => {
  return (
    <Section isFirst>
      <HeaderWrapper>
        <h1>Projects</h1>
        <ProjectGrid>
          {projectItems.map((i) => {
            const hasOutsideLink = i.path?.includes('http');

            return (
              <>
                {i.path && hasOutsideLink ? (
                  <a href={i.path} target="_blank" rel="noreferrer">
                    <Card>
                      <h3>{i.name}</h3>
                      <p>{i.description}</p>
                    </Card>
                  </a>
                ) : (
                  <CardLink to={i.path!}>
                    <Card>
                      <h3>{i.name}</h3>
                      <p>{i.description}</p>
                    </Card>
                  </CardLink>
                )}
              </>
            );
          })}
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
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-top-color: transparent;
  transition: box-shadow 0.25s ease-in-out, transform 0.25s ease-in-out;
  cursor: pointer;
  position: relative;
  height: 100%;

  /* Orange border */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
    border-top: 5px solid ${({ theme }) => theme.colors.orange};
  }

  &:hover {
    transform: scale3d(0.99, 0.99, 1);
    box-shadow: -1px 1px 5px rgba(255, 255, 255, 0.05);
  }

  & a {
    color: ${({ theme }) => theme.colors.blue};
  }

  &:last-child {
    color: ${({ theme }) => theme.colors.light_gray};
  }
`;
