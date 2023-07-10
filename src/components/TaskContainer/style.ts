import styled from "styled-components";

export const StyleTaskContainer = styled.div`
  width: 46rem;
  margin-left: 30.75%;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 4rem;

    h1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.875rem;
      a{
        background-color: ${({ theme }) => theme['gray-500']};
        margin-left: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 9999px;
        color: ${({ theme }) => theme['gray-100']};
      }
    }
      #created {
        color: ${({ theme }) => theme['blue-dark']};
      }
      #concluded {
        color: ${({ theme }) => theme['purple-dark']};

    }
  }
`