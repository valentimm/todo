import styled from "styled-components";

export const StyleHeader = styled.header`
  width: 100%;
  height: 12.5rem;
  background-color: ${({ theme }) => theme['gray-700']};
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 7.875rem;
  }

  @media (max-width: 768px) {
    height: 6.25rem;
    img {
      width: 6.375rem;
      margin-top: -1.5rem;
    }
  }
`