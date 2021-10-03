import { Input, Label, SubmitButton } from 'common/ui-elements/forms';
import { Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import { flashcardState } from 'state';
import styled from 'styled-components';

interface FlashcardInputsProps {
  cardIndex: number;
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
  setIndex,
}) => {
  const [cards, updateCards] = useRecoilState(flashcardState);
  const addCard = (s: string, d: string) =>
    updateCards([{ subject: s, description: d }, ...cards]);
  const removeCard = (idx: number) =>
    updateCards(cards.filter((c) => c.subject !== cards[idx].subject));

  return (
    <Formik<FormValues>
      initialValues={{
        subject: '',
        description: '',
        index: cardIndex,
        type: null,
      }}
      onSubmit={(values: FormValues, helpers: FormikHelpers<FormValues>) =>
        submit(values, helpers, addCard, removeCard, setIndex)
      }
      enableReinitialize
    >
      {(form) => {
        return (
          <form onSubmit={form.handleSubmit} style={{ width: '70%' }}>
            <FormInputGrid>
              <StyledLabel1 label="Subject">
                <Input
                  name="subject"
                  onChange={form.handleChange}
                  value={form.values.subject}
                />
              </StyledLabel1>
              <StyledLabel2 label="Description">
                <Input
                  name="description"
                  onChange={form.handleChange}
                  value={form.values.description}
                />
              </StyledLabel2>
              <SubmitButton
                onSubmit={() => form.submitForm}
                onClick={() => form.setFieldValue('type', 'adding')}
              >
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
              </SubmitButton>
              <SubmitButton
                disabled={!cards.length}
                onSubmit={() => form.submitForm}
                onClick={() => form.setFieldValue('type', 'deleting')}
                color="dark_teal"
              >
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
              </SubmitButton>
            </FormInputGrid>
          </form>
        );
      }}
    </Formik>
  );
};

function submit(
  values: FormValues,
  { setSubmitting, resetForm }: FormikHelpers<FormValues>,
  addCard: (s: string, d: string) => void,
  removeCard: (index: number) => void,
  setIndex: (v: number) => void
) {
  setSubmitting(true);

  if (values.type === 'deleting') {
    // Decrement index to account for removing unless already at 0;
    values.index !== 0 ? setIndex(values.index - 1) : null;
    removeCard(values.index);

    setSubmitting(false);
    resetForm();
    return;
  }

  addCard(values.subject, values.description);

  setSubmitting(false);
  resetForm();
  return;
}

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
