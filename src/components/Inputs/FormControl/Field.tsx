import styled, { css } from 'styled-components';
import { ThemeType } from '../../../theme';
import { Grid, GridProps } from '../../Grid';

type FieldProps = GridProps & {
  theme?: ThemeType;
  inline?: boolean;
};

export const Field: any = styled(Grid).attrs({
  gridGap: 1,
  role: 'group',
})<FieldProps>`
  ${(props: FieldProps) =>
    props.inline &&
    css`
      grid-gap: ${props.theme.space[4]}px;
      grid-template-columns: 2fr 4fr;
    `}
`;

Field.defaultProps = {
  border: 0,
  p: 0,
  ml: 0,
  mr: 0,
};

export const FieldSet: any = styled(Grid).attrs({
  gridGap: 2,
  as: 'fieldset',
})<GridProps>``;

FieldSet.defaultProps = {
  border: 0,
  p: 0,
  ml: 0,
  mr: 0,
};
