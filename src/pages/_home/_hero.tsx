import React, { FC, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import heroSvg from "common/assets/images/hero.svg";
import { Section } from "common/layout/sections";
import { useTransition, animated } from "react-spring";
import { hiItems } from "./_languages";
import { Input } from "common/ui-elements/forms";
import { useRecoilState } from "recoil";
import { heroState } from "state/home";


interface HeroProps {
  className?: string;
};

export const Hero: FC<HeroProps> = ({ className }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useRecoilState(heroState);

  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(hiItems[index].item.length);
  const valueRef = useRef<HTMLSpanElement | null>(null);

  const transitions = useTransition(hiItems[index], hiItems => hiItems.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 60, friction: 10 },
    unique: true,
    reset: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % hiItems.length);
    }, 1000 * 3);

    return () => clearInterval(interval)
  }, []);

  useEffect(() => {
    console.log("value", valueRef.current?.clientWidth)
    setLength(valueRef.current?.clientWidth || hiItems[index].item.length);
  }, [index])


  return (
    <StyledSection className={className} src={heroSvg}>
      <Content>
        <HeroHeader>
          {`</`}
          {transitions.map(({ item: language, props, key }) => {
            return (
              <HeroHeaderAnimatedText
                ref={valueRef}
                key={key}
                style={{ ...props, position: "absolute" }}
              >
                {language.item}
              </HeroHeaderAnimatedText>
            )
          })}
          <Text length={length + 15}>
            {!editing ? (
              <span
                onClick={() => setEditing(true)}
              >
                {value}
              </span>
            ) : (
                <StyledInput
                  autoFocus
                  value={value}
                  onChange={(e) => setValue(e.currentTarget.value)}
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                      e.preventDefault();
                      setEditing(false);
                      if (!value) {
                        setValue("Everyone")
                      }
                    }
                  }}
                  onBlur={() => {
                    setEditing(false);
                    if (!value) {
                      setValue("Everyone")
                    }
                  }}
                />
              )}
            {`>`}
          </Text>
        </HeroHeader>
      </Content>
    </StyledSection>
  )
}

const StyledSection = styled(Section) <{ src: string }>`
  height: 50vh;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
`;

const HeroHeader = styled.h1`
  max-width: 100vw;
  margin: 0;
`;

const HeroHeaderAnimatedText = styled(animated.span)``;

const Text = styled.span<{ length: number }>`
  margin-left: ${({ length }) => `${length}px`};
  transition: margin-left 500ms cubic-bezier(0.520, 0.095, 0.270, 0.895);
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledInput = styled(Input)`
  width: 17rem;
  height: 5rem;
`;