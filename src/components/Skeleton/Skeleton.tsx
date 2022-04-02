import styled from 'styled-components';

export const Skeleton = styled.div`
  width: 100%;
  /* height: 15px; */
  display: block;
  border-radius: 3px;
  background: linear-gradient(
      to right,
      rgba(197, 199, 204, 0),
      rgba(197, 199, 204, 0.3) 30%,
      rgba(197, 199, 204, 0) 50%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 50px 500px;
  background-position: 0 0;
  animation: shine 1s infinite;

  @keyframes shine {
    to {
      background-position: 100% 0;
    }
  }
`;
