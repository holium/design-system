import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import type { ThemeType } from '..';

export type TabStyleProps = {
  theme: ThemeType;
  isActive?: boolean;
  isDisabled?: boolean;
};

const underlineSize = 3;
export const TabStyle = styled.div<TabStyleProps>`
  text-transform: uppercase;
  display: flex;
  font-weight: 700;
  font-size: 14px;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 10px;
  text-decoration: none;
  border-bottom: ${underlineSize}px solid transparent;
  transition: all 0.3s;
  border-radius: ${(p) => p.theme.containers.innerBorderRadius}px
    ${(p) => p.theme.containers.innerBorderRadius}px 0 0;
  cursor: pointer;
  -webkit-transform: translateY(1px);
  -ms-transform: translateY(1px);
  transform: translateY(1px);
  color: ${(p: TabStyleProps) => p.theme.colors.text.disabled};
  :hover,
  :active,
  :focus {
    border-bottom: ${underlineSize}px solid
      ${(p) => rgba(p.theme.colors.text.disabled, 0.7)};
  }
  :visited {
    color: ${(p) => p.theme.colors.text.disabled};
  }
  ${(p) =>
    p.isActive &&
    css`
      border-bottom: ${underlineSize}px solid
        ${(p) => p.theme.colors.brand.primary};
      pointer-events: none;
      color: ${(p) => p.theme.colors.brand.primary};
      :hover {
        border-bottom: ${underlineSize}px solid
          ${(p) => p.theme.colors.brand.primary};
      }
    `}
  ${(p) =>
    p.isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.3;
    `}
`;
