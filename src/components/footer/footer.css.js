import styled from 'styled-components';

export const Container = styled.header`
@import url('https://fonts.googleapis.com/css?family=Solway&display=swap');
  h1 {
    font-size: calc(12px + 3vmin);
    font-family: 'Solway', cursive;
    text-shadow: 1px 1px 2px black, 0 0 1em pink, 0 0 0.2em pink;
    padding: 2vw;
  }
  background-image: linear-gradient(to right, papayawhip, white, papayawhip);
  max-width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  line-height: 3vh;
  a {
    color: blue;
    transition: color 0.4s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;
