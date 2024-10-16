export const links = {
  home: () => `/`,
  linkedIn: () => `https://www.linkedin.com/in/kevin-carlos/`,
  gitlab: () => `https://gitlab.com/Kevin-Carlos`,
  github: () => `https://github.com/Kevin-Carlos`,
  aboutMe: () => `/about`,
  projects: () => ({
    root: () => `/projects`,
    project: () => ({
      loaders: () => `/projects/loaders`,
      lootCrate: () => `/projects/loot-crate`,
      flashcards: () => `/projects/flashcards`,
      snackCenter: () => `/projects/snack-center`,
      connect4: () => `/projects/connect-4`,
    }),
  }),
};
