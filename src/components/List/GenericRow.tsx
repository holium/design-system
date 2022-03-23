import styled from 'styled-components';
import { rgba } from 'polished';

export const GenericRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: inherit;
  font-size: ${(props) => props.theme.fontSizes[2]};
  padding: 8px;
  border-radius: 8px;
  height: 40px;
  transition: ${(props: any) => props.theme.transition};
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  /* svg {
    fill: ${(props: any) => rgba(props.theme.colors.icon.app, 0.5)};
  } */
  &:hover,
  &:active,
  &:focus {
    transition: ${(props: any) => props.theme.transition};
    background: ${(props: any) => props.theme.colors.highlights.bgHighlight};
  }
`;
