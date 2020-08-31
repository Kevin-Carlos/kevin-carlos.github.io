import React, { FC } from "react";
import { Section } from "common/layout/sections";

export const CurrentEvents: FC = () => {
  return (
    <Section>
      <h1>What I've Got Goin' On</h1>
      <ul>
        <li>Helping re-define the <a href="https://cycle.io" target="_blank">Cycle.io</a> brand</li>
        <li>Feature improvements and additions to Cycle's front-end applications</li>
        <li>
          Work on this website
          <ul style={{ listStyle: "disc" }}>
            <li>Mobile friendly</li>
            <li>Finish layout</li>
            <li>Define <span style={{ fontStyle: "italic" }}>branding</span></li>
            <li>Additional svg elements</li>
            <li>Theme toggle</li>
            <li>Add to projects</li>
          </ul>
        </li>
      </ul>
    </Section>
  )
}