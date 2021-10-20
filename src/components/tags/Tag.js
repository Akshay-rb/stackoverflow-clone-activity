import React from 'react'
import styled from 'styled-components'

const StyledTag = styled.span`
display: inline-block;
  margin-right: 5px;
  background-color: #3e4a52;
  color:#9cc3db;
  padding: 7px;
  border-radius: 4px;
  font-size: .9rem;
  text-decoration: none;
  transition: all .2s ease;
  &:hover{
    background-color: #5e6a72;
    color:#bce3fb;
  }
`;
    /* display:inline-block;
    margin-right:5px;
    background-color:#3e4a52;
    color: #9cc3db;
    padding: 7px;
    border-radius: 4px;
    font-size: .9rem;
`; */

function Tag({tag}){
    return <StyledTag>{tag}</StyledTag>
}

export default Tag