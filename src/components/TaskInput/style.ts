import styled from "styled-components";

export const StyleTaskInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: -1.75rem;
  outline: none;

  input {
    width: 39.875rem;
    height: 3.5rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme['gray-500']};
    border: none;
    padding: 1rem;
    color: ${({ theme }) => theme['gray-100']};
    font-size: 1rem;
    line-height: 140%;
    &::placeholder {
      color: ${({ theme }) => theme['gray-300']};
    }
    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme['purple-dark']};
    }
  }
  button {
    width: 5.625rem;
    height: 3.5rem;
    margin-left: 0.5rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme['blue-dark']};
    border: none;
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 140%;
    color: ${({ theme }) => theme['gray-100']};
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme['blue']};
    }
  }
`