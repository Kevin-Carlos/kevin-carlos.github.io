import { atom } from "recoil";

export const flashcardState = atom({
  key: "website-cards",
  default: [
    {
      subject: "What is the most astounding fact about the universe?",
      description: "https://www.youtube.com/watch?v=9D05ej8u-gU",
    },
    {
      subject: "Cat",
      description: "Meow",
    },
    {
      subject: "Cow",
      description: "Moo"
    }
  ]
});