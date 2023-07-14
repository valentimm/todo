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

  main {
    margin-top: 2rem;
    display: flex;
    padding: 64px 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    border-radius: 0.5rem;
    border-top: 1px solid ${({ theme }) => theme['gray-400']};

    h1{
      color: ${({ theme }) => theme['gray-300']};
      text-align: center;
      font-size: 1rem;
      font-weight: 700;
      line-height: 140%;
    }

    h2{
      color: ${({ theme }) => theme['gray-300']};
      text-align: center;
      font-size: 1rem;
      font-weight: 400;
      line-height: 140%;
    }
    img {
      justify-content: center;
      align-items: center;
      margin-left: 42%;
    }
  }
`