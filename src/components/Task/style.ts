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

input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 1rem;
  height: 1rem;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme['blue']};
  border-radius: 9999px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 0.65rem;
  position: relative; 

  &:hover {
    background-color: ${({ theme }) => theme['blue-dark']};
    opacity: 0.8;
  }
}

input[type="checkbox"]:checked {
  background-color: ${({ theme }) => theme['purple-dark']};
  border-color: ${({ theme }) => theme['purple-dark']};
}

input[type="checkbox"]::before {
  content: "";
  display: none;
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  width: 0.5rem;
  height: 0.5rem;
  background-image: url("check.svg");
  background-size: cover;
  background-position: center;
}
input[type="checkbox"]:checked::before {
  display: inline-block;
}

  p {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-100']};
    text-align: left;
    padding: 0 0.25rem;
  }
  input[type="checkbox"]:checked ~ p {
  text-decoration: line-through;
}

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.25rem;
    img{
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.45rem;
    }
    &:hover {
      background-color: ${({ theme }) => theme['gray-400']};
      display: flex;
      background-image: url("trash-red.svg");
      background-repeat: no-repeat;
      background-position: center;
    img {
      display: none;
    }
    }
  }
`