import { atom, selector } from 'recoil';

export const flashcardState = atom({
  key: 'website-cards',
  default: [
    {
      subject: 'What is the most astounding fact about the universe?',
      description: 'https://www.youtube.com/watch?v=9D05ej8u-gU',
    },
    {
      subject: 'What kind of car do you want?',
      description: 'A Tesla',
    },
  ],
});

export const currentFlashcardState = selector({
  key: 'CurrentFlashcardState',
  get: ({ get }) => {
    return get(flashcardState);
  },
});
