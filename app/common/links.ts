export const links = {
  home: () => `/`,
  linkedIn: () => `https://www.linkedin.com/in/kevin-carlos/`,
  gitlab: () => `https://gitlab.com/Kevin-Carlos`,
  github: () => `https://github.com/Kevin-Carlos`,
  aboutMe: () => `/about`,
  projects: () => ({
    root: () => `/projects`,
    project: () => ({
      lootCrate: () => `/projects/loot-crate`,
      flashcards: () => `/projects/flashcards`,
    }),
  }),
};
