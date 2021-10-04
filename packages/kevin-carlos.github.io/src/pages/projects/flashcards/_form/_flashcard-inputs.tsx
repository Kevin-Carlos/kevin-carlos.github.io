import { Input, Label } from 'common/ui-elements/forms';
// import { Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button } from 'sublimity-ui';

interface FlashcardInputsProps {
  cardIndex: number;
  disable: boolean;
  setIndex: (v: number) => void;
  addCard: (s: string, d: string) => void;
  removeCard: (idx: number) => void;
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
  addCard,
  removeCard,
}) => {
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

  return (
    <form style={{ width: '70%' }}>
      <FormInputGrid>
        <StyledLabel1 label="Subject">
          <Input {...register(`subject`)} />
        </StyledLabel1>
        <StyledLabel2 label="Description">
          <Input {...register(`description`)} />
        </StyledLabel2>
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

// function submit(
//   values: FormValues,
//   { setSubmitting, resetForm }: FormikHelpers<FormValues>,
//   addCard: (s: string, d: string) => void,
//   removeCard: (index: number) => void,
//   setIndex: (v: number) => void
// ) {
//   setSubmitting(true);

//   if (values.type === 'deleting') {
//     // Decrement index to account for removing unless already at 0;
//     values.index !== 0 ? setIndex(values.index - 1) : null;
//     removeCard(values.index);

//     setSubmitting(false);
//     resetForm();
//     return;
//   }

//   addCard(values.subject, values.description);

//   setSubmitting(false);
//   resetForm();
//   return;
// }

const StyledLabel1 = styled(Label)``;
const StyledLabel2 = styled(Label)``;

const FormInputGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: minmax(0, 1fr);

  ${({ theme }) => theme.mediaQuery.laptop} {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
`;
