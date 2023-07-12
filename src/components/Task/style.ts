import styled from 'styled-components';

export const StyleTask = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  padding: 1rem;
  gap: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme['gray-400']};
  background-color: ${({ theme }) => theme['gray-500']};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
  min-height: 4.5rem;

  p {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-100']};
    text-align: left;
  }

  button {
    display: flex;
    align-items: center;
    align-self: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;

    &:hover {
      background-color: ${({ theme }) => theme['gray-400']};
    }
    img svg path {
      fill: ${({ theme }) => theme['danger']};
    }
  }
`