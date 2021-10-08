// Write your Character component here

import React from 'react';
// import axios from 'axios';
import styled from 'styled-components';

const StyledChar = styled.div`
    text-align: left;
    padding-left: 18%;
`
const StyledName = styled.div`
    font-size: 2rem;
    font-weight: bold;
    color: #d9e5d6;
    font-family: "Copperplate";
`
const StyledP = styled.p`
  text-align: right;
  padding-right: 25%;
  font-weight: none;
  font-style: italic;
`

export default function Character(props) {
    const { spaceData } = props

      return (
        <StyledChar className='container'>
          {spaceData.map((elem, index) => (
              <StyledName className="test-elem" key={index}>{elem.name}
              <StyledP>{elem.birth_year} <br></br> {elem.gender}</StyledP>
              </StyledName>
          ))}
        </StyledChar>
      )
}