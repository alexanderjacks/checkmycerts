import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
@import url('https://fonts.googleapis.com/css?family=Solway&display=swap');
  font-family: 'Solway', cursive;
  display: block;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '3.2rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '2rem';
      }
    }};
  `};
`;
