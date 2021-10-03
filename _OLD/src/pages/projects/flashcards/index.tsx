import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "common/ui-elements/icons";
import { Section } from "common/layout/sections";
import { useRecoilValue } from "recoil";
import { flashcardState } from "state/flashcards";
import { MenuLayout } from "common/layout";
// import { LinkButton } from "common/ui-elements";
import { FlashcardInputs } from "./_form/_flashcard-inputs";

type CardSide = "front" | "back";

export default (): React.ReactElement => {
  const [index, setIndex] = useState(0);
  const [sideOfCard, setSideOfCard] = useState<{ idx: number; side: CardSide }>(
    {
      idx: index,
      side: "front",
    }
  );
  const cards = useRecoilValue(flashcardState);
  const updateIndex = (v: number) => setIndex(v);

  useEffect(() => {
    setSideOfCard({
      idx: index,
      side: "front",
    });
  }, [index]);

  return (
    <MenuLayout>
      <Section isFirst centered>
        <h1>Flashcards</h1>
        <CardWrapper>
          <StyledChevronLeft
            // Extra check just to ensure no crash happens
            onClick={() => {
              if (index === 0) {
                return;
              }

              setIndex(index - 1);
            }}
            shouldHide={index === 0}
          />
          <Flashcard
            onClick={() =>
              /* Flip card */
              setSideOfCard({
                idx: index,
                side: sideOfCard.side === "front" ? "back" : "front",
              })
            }
            side={sideOfCard.side}
          >
            <p style={{ userSelect: "none" }}>
              {cards.length ? (
                sideOfCard.side === "front" ? (
                  cards[index].subject
                ) : (
                  <>
                    {cards[index].description.includes("http") ? (
                      <a
                        href={cards[index].description}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {cards[index].description}
                      </a>
                    ) : (
                      cards[index].description
                    )}
                  </>
                )
              ) : (
                []
              )}
            </p>
          </Flashcard>
          <StyledChevronRight
            onClick={() => {
              // Extra check just to ensure no crash happens
              if (index === cards.length - 1) {
                return;
              }

              setIndex(index + 1);
            }}
            shouldHide={index === cards.length - 1 || !cards.length}
          />
        </CardWrapper>
        <InputWrapper>
          <FlashcardInputs cardIndex={index} setIndex={updateIndex} />
        </InputWrapper>
      </Section>
    </MenuLayout>
  );
};

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const Flashcard = styled.div<{ side: CardSide }>`
  width: 30rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};

  border: 1px solid ${({ theme }) => theme.colors.light_gray};
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  word-wrap: break-word;
  white-space: initial;
  cursor: pointer;

  & a {
    color: ${({ theme }) => theme.colors.blue};
  }

  ${({ theme }) => theme.mediaQuery.tablet} {
    width: 50rem;
    height: 30rem;
  }
  ${({ side }) =>
    side === "back" &&
    `
      background-image: linear-gradient(to bottom,
          #ffffff 15%,
          #F94545 16%,
          #ffffff 16%,
          #ffffff 25%,
          #85b2d3 26%,
          #ffffff 26%,
          #ffffff 35%,
          #85b2d3 36%,
          #ffffff 36%,
          #ffffff 45%,
          #85b2d3 46%,
          #ffffff 46%,
          #ffffff 55%,
          #85b2d3 56%,
          #ffffff 56%,
          #ffffff 65%,
          #85b2d3 66%,
          #ffffff 66%,
          #ffffff 75%,
          #85b2d3 76%,
          #ffffff 76%,
          #ffffff 85%,
          #85b2d3 86%,
          #ffffff 86%,
          #ffffff 95%,
          #85b2d3 96%,
          #ffffff 96%
      );
    `};
`;

const StyledChevronRight = styled(ChevronRight)<{ shouldHide: boolean }>`
  ${({ shouldHide }) =>
    shouldHide &&
    `
    opacity: 0;
    pointer-events: none;
    cursor: normal;
  `};
`;

const StyledChevronLeft = styled(ChevronLeft)<{ shouldHide: boolean }>`
  ${({ shouldHide }) =>
    shouldHide &&
    `
    opacity: 0;
    pointer-events: none;
    cursor: normal;
  `};
`;
