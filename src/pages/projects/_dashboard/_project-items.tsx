import React from "react";
import { links } from "common/links";

interface Items {
  name: string;
  description: React.ReactChild;
  path: string;
};

export const projectItems: Items[] = [
  {
    name: "Flashcards",
    description:
      <p>
        This project was built to demonstrate my ability to quickly learn a MERN stack and Redux.
        The original can be seen on{" "}
        <a href="https://github.com/Kevin-Carlos/ReactFlashcards">
          GitHub
        </a>.{" "}
        For the initial launch of this site, I am creating a local version tied into recoil (a state
        management library).
      </p>,
    path: links.projects().project().flashcards()
  }
];