import React, { FC } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Formik, FormikHelpers } from "formik";
import { flashcardState } from "state/flashcards";
import { Input, SubmitButton, Label } from "common/ui-elements/forms";

interface FlashcardInputsProps {
  cardIndex: number;
  setIndex: (v: number) => void;
};

interface FormValues {
  subject: string;
  description: string;
  index: number;
  type: "adding" | "deleting" | null;
};

export const FlashcardInputs: FC<FlashcardInputsProps> = ({
  cardIndex,
  setIndex,
}) => {
  const [cards, updateCards] = useRecoilState(flashcardState);
  const addCard = (s: string, d: string) => updateCards([{ subject: s, description: d }, ...cards]);
  const removeCard = (idx: number) => updateCards(cards.filter(c => c.subject !== cards[idx].subject));

  return (
    <Formik<FormValues>
      initialValues={{
        subject: "",
        description: "",
        index: cardIndex,
        type: null,
      }}
      onSubmit={(values: FormValues, helpers: FormikHelpers<FormValues>) =>
        submit(
          values,
          helpers,
          addCard,
          removeCard,
          setIndex
        )
      }
      enableReinitialize
    >
      {form => {
        return (
          <form onSubmit={form.handleSubmit} style={{ width: "70%" }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
            }}>
              <Wrapper>
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
              </Wrapper>
              <div style={{ display: "flex" }}>
                <SubmitButton
                  onSubmit={() => form.submitForm}
                  onClick={() => form.setFieldValue("type", "adding")}
                >
                  Add
                </SubmitButton>
                <SubmitButton
                  disabled={!cards.length}
                  onSubmit={() => form.submitForm}
                  onClick={() => form.setFieldValue("type", "deleting")}
                >
                  Delete
                </SubmitButton>
              </div>
            </div>
          </form>
        )
      }}
    </Formik>
  )
}

function submit(
  values: FormValues,
  { setSubmitting, resetForm }: FormikHelpers<FormValues>,
  addCard: (s: string, d: string) => void,
  removeCard: (index: number) => void,
  setIndex: (v: number) => void,
) {
  setSubmitting(true);

  if (values.type === "deleting") {
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  ${({ theme }) => theme.mediaQuery.tablet} {
    flex-direction: row;
  }
`;

const StyledLabel1 = styled(Label)`
  margin-left: 1rem;
`;
const StyledLabel2 = styled(Label)`
  margin-left: 2rem;
`;