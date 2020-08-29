export const links = {
  home: () => `/`,
  linkedIn: () => `https://www.linkedin.com/in/kevin-carlos/`,
  stackoverflow: () => `https://stackoverflow.com/users/12329333/kevin-carlos`,
  github: () => `https://github.com/Kevin-Carlos`,
  projects: () => ({
    root: () => `/projects`,
    project: () => ({
      flashcards: () => `/projects/flashcards`,
    }),
  })
}