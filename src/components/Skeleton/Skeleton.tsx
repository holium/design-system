import styled from 'styled-components';

export const Skeleton = styled.div`
  width: 100%;
  /* height: 15px; */
  display: block;
  border-radius: 3px;
  animation: skeleton-loading 1s linear infinite alternate;

  /* background: linear-gradient(
      to right,
      rgba(197, 199, 204, 0.1) 20%,
      rgba(197, 199, 204, 0.3) 40%,
      rgba(197, 199, 204, 0.1) 20%
    ),
    rgba(197, 199, 204, 0.3);
  background-repeat: repeat-y;
  background-size: 50px 500px;
  background-position: 0 0;
  animation: shine 1s infinite; */

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(250, 20%, 95%);
    }
    100% {
      background-color: hsl(250, 20%, 88%);
    }
  }
  @keyframes shine {
    to {
      background-position: 100% 0;
    }
  }
`;
