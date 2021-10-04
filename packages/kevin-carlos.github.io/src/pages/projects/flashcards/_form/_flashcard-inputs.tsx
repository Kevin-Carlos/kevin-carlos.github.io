import { Input, Label } from 'common/ui-elements/forms';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Button } from 'sublimity-ui';
import { flashcardState } from '../../../../state';

interface FlashcardInputsProps {
  cardIndex: number;
  disable: boolean;
  setIndex: (v: number) => void;
}

interface FormValues {
  subject: string;
  description: string;
  index: number;
  type: 'adding' | 'deleting' | null;
}

export const FlashcardInputs: FC<FlashcardInputsProps> = ({
  cardIndex,
  disable,
  setIndex,
}) => {
  const [, updateCards] = useRecoilState(flashcardState);

  const { register, getValues } = useForm<FormValues>({
    defaultValues: {
      subject: '',
      description: '',
      index: cardIndex,
      type: null,
    },
  });

  const submitForm = (type: FormValues['type']) => {
    const formData = getValues();

    console.log('FORM DATA', formData);

    switch (type) {
      case 'adding': {
        addCard(formData.subject, formData.description);

        break;
      }
      case 'deleting': {
        removeCard(cardIndex);

        break;
      }
      default:
        break;
    }
  };

  const addCard = (s: string, d: string) =>
    updateCards((prev) => [{ subject: s, description: d }, ...prev]);

  const removeCard = (idx: number) =>
    updateCards((curCards) => curCards.filter((_, index) => index === idx));

  return (
    <form style={{ width: '70%' }}>
      <FormInputGrid>
        <Label label="Subject">
          <Input {...register(`subject`)} />
        </Label>
        <Label label="Description">
          <Input {...register(`description`)} />
        </Label>
        <Button onClick={() => submitForm('adding')} color="light_teal">
          <span
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Add
            <svg
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="2.5rem"
              height="2rem"
              style={{ marginBottom: '0.5rem' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </span>
        </Button>
        <Button disabled={disable} color="dark_teal">
          <span
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Delete
            <svg
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="2.5rem"
              height="2.5rem"
              style={{ margin: '0 0 0 0.5rem' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </span>
        </Button>
      </FormInputGrid>
    </form>
  );
};

const FormInputGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: minmax(0, 1fr);

  ${({ theme }) => theme.mediaQuery.laptop} {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
`;
