import { Divider } from "common/components";
import React from "react";
import styled from "styled-components";

export const EducationBlurb = ({}) => {
  return (
    <>
      <h2 style={{ marginTop: 0 }}>University of Nevada, Reno</h2>
      <Education>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <p>
            I graduated in the winter of 2019 from the University of Nevada,
            Reno with a Bachelors in Computer Science and Engineering and a
            minor in Mathematics.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <Divider />
          </div>

          <p>
            My coursework and area of interest was in Machine Learning and A.I.
            For my Senior project, I worked as the primary front-end developer
            on a team of three. Our goal was to refactor and rebuild from
            scratch an in-use production application.
          </p>
        </div>
      </Education>
    </>
  );
};

const Education = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
