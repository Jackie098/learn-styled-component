import styled from 'styled-components';

export const Title = styled.h1`
  color: #C00;
  font-size: ${props=>`${props.fontSize}px`};
  background: #332;

  span {
    font-family: sans-serif;
    font-weight: bold;
    font-size: 10px;
  }
`;

export const TitleSmall = styled(Title)`
  font-size: 20px;
`;