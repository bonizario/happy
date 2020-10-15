import styled from 'styled-components';

export const Container = styled.div`
  height: 29rem;
  width: 54.8rem;
  overflow: hidden;
  margin-bottom: 4rem;
  border-radius: 2rem;
  border: 1px solid var(--color-gray);

  > footer {
    height: 4.8rem;
    background-color: var(--color-input);

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.5rem;
    color: var(--color-text-title);
  }
`;
