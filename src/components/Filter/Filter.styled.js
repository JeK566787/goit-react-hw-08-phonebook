import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  font-size: 18px;
`;

export const Input = styled.input`
  display: block;
  width: 250px;
  margin: 0 auto;
  margin-top: 5px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  background: #a0f399;
  &:focus {
    background: #e6fffa;
  }
`;
