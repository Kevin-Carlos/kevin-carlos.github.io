import React from "react";
import { links } from "common/links";

interface Items {
  name: string;
  description: React.ReactChild;
  path: string | null;
}

export const projectItems: Items[] = [
  {
    name: "Flashcards",
    description: (
      <p>
        This project was built to demonstrate my ability to quickly learn a MERN
        stack and Redux. The original can be seen on{" "}
        <a
          href="https://github.com/Kevin-Carlos/ReactFlashcards"
          target="_blank"
        >
          GitHub
        </a>
        . This is a local version made using recoil for state management.
      </p>
    ),
    path: links.projects().project().flashcards(),
  },
  {
    name: "Snowpack Site",
    path: null,
    description: (
      <p>
        Using <a href="https://snowpack.dev">Snowpack</a> to develop this site
        and experiment with new development tools. The code can be found{" "}
        <a href="https://github.com/Kevin-Carlos/Website" target="_blank">
          here
        </a>
        .
      </p>
    ),
  },
];
