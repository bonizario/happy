import styled, { css } from 'styled-components';

interface IOpeningDetails {
  openOnWeekends: boolean;
}

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow-x: hidden;
`;

export const Main = styled.main`
  flex: 1;

  > div {
    width: 70rem;
    margin: 6.4rem auto;
    background: var(--color-white);
    border: 1px solid var(--color-back-lines-in-white);
    border-radius: 2rem;
    overflow: hidden;

    > img {
      width: 100%;
      height: 30rem;
      object-fit: cover;
    }
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 1.6rem;
  margin: 1.6rem 4rem 0;

  button {
    height: 8.8rem;
    border-radius: 2rem;
    overflow: hidden;
    opacity: 0.6;

    &.active {
      opacity: 1;
    }

    img {
      width: 100%;
      height: 8.8rem;
      object-fit: cover;
    }
  }
`;

export const OrphanageDetails = styled.div`
  padding: 8rem;

  h1 {
    font-size: 5.4rem;
    line-height: 5.4rem;
    color: var(--color-text-title-dark);
    margin-bottom: 0.8rem;
  }

  h2 {
    font-size: 3.6rem;
    line-height: 4.6rem;
    color: var(--color-text-title-dark);
  }

  p {
    line-height: 2.8rem;
    color: var(--color-text-base);
    margin-top: 2.4rem;

    &:first-of-type {
      margin-bottom: 6.4rem;
    }

    &:last-of-type {
      margin-bottom: 2.4rem;
    }
  }

  hr {
    width: 100%;
    height: 1px;
    margin: 6.4rem 0;
    background: var(--color-back-lines-in-white);
  }
`;

export const OpeningDetails = styled.section<IOpeningDetails>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  margin-top: 2.4rem;

  > div {
    padding: 3.2rem 2.4rem;
    border-radius: 2rem;
    line-height: 2.8rem;

    &:first-child {
      background: linear-gradient(
        149.97deg,
        var(--color-blue-low) 8.13%,
        var(--color-white) 92.67%
      );
      border: 1px solid var(--color-blue-dashed);
      color: var(--color-text-base);
    }

    &:last-child {
      background: linear-gradient(
        154.16deg,
        var(--color-green-low) 7.85%,
        var(--color-white) 91.03%
      );
      border: 1px solid var(--color-green-medium);
      color: var(--color-green);
    }

    ${props =>
      !props.openOnWeekends &&
      css`
        &:last-child {
          background: linear-gradient(
            154.16deg,
            var(--color-red-low) 7.85%,
            var(--color-white) 91.03%
          );
          border: 1px solid var(--color-pink-light);
          color: var(--color-pink);
        }
      `}

    > svg {
      display: block;
      margin-bottom: 2rem;
    }
  }
`;

export const ContactButton = styled.button`
  width: 100%;
  height: 6.4rem;
  font-weight: 800;
  margin-top: 6.4rem;
  border-radius: 2rem;
  color: var(--color-white);
  background-color: var(--color-green);
  transition: background-color 250ms;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 1.6rem;
  }

  &:hover {
    background-color: var(--color-green-hover);
  }
`;
