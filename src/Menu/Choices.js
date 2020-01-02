import React from 'react';
import styled from 'styled-components';

const RadioButton = styled.input`
  cursor: pointer;
`

const Label = styled.label`
  cursor: pointer;
  margin-right: 10px;
`;

export function Choices({openItem, chosenRadio}) {
  return (
    <>
      <h3>Choose One:</h3>
      {openItem.choices.map(choice => {
        return (
          <>
            <RadioButton
              type="radio"
              id={choice}
              name="choice"
              value={choice}
              checked={chosenRadio.choice === choice}
              onChange={(e) => {chosenRadio.onChange(e)}}
            />
            <Label for={choice}>{choice}</Label>
          </>
        )

      })}
    </>
  )
}
