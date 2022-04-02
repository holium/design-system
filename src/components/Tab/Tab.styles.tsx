import styled, { css } from 'styled-components';
import type { ThemeType } from '..';

export type TabStyleProps = {
  theme: ThemeType;
  isActive?: boolean;
};

export const TabStyle = styled.div<TabStyleProps>`
  a {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4px 8px;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    transition: all 0.3s;
    border-radius: ${(p) => p.theme.containers.innerBorderRadius}px
      ${(p) => p.theme.containers.innerBorderRadius}px 0 0;
    cursor: pointer;
    -webkit-transform: translateY(3px);
    -ms-transform: translateY(3px);
    transform: translateY(3px);
    color: ${(p: TabStyleProps) => p.theme.colors.text.secondary};
    :hover,
    :active,
    :focus {
      color: ${(p) => p.theme.colors.brand.secondary};
      border-bottom: 3px solid ${(p) => p.theme.colors.brand.secondary};
    }
    :visited {
      color: ${(p) => p.theme.colors.text.secondary};
    }
    ${(p) =>
      p.isActive &&
      css`
        border-bottom: 3px solid ${(p) => p.theme.colors.brand.secondary};
        pointer-events: none;
        color: ${(p) => p.theme.colors.brand.secondary};
      `}
  }
`;
