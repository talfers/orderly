import React from 'react';
import styled from 'styled-components';

const ChoiceContainer = styled.div`
  display: inline-block;
`

const RadioButton = styled.input`
  cursor: pointer;
  margin-right: 4px;
`

const Label = styled.label`
  cursor: pointer;
  margin-right: 10px;
`;

export function Choices({openItem, chosenRadio}) {
  return (
    <>
      <h3>Choose One:</h3>
      {openItem.choices.map((choice, index) => {
        return (
          <ChoiceContainer key={index}>
            <RadioButton
              type="radio"
              id={choice}
              name="choice"
              value={choice}
              checked={chosenRadio.choice === choice}
              onChange={(e) => {chosenRadio.onChange(e)}}
            />
            <Label htmlfor={choice}>{choice}</Label>
          </ChoiceContainer>
        )

      })}
    </>
  )
}
