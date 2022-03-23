import React, { FC } from 'react';
import { AppButtonStyle, AppText } from './AppButton.styles';
import { Tooltip } from '..';

export type AppButtonProps = {
  id?: any;
  buttonRef?: any;
  name: string;
  tooltip?: boolean;
  expanded?: boolean;
  disabled?: boolean;
  selected?: boolean;
  onAppClick: (...args: any) => void;
  icon: any;
};

export const AppButton: FC<AppButtonProps> = (props: AppButtonProps) => {
  const {
    id,
    buttonRef,
    name,
    expanded,
    disabled,
    selected,
    onAppClick,
    icon,
    tooltip,
  } = props;
  let button = (
    <AppButtonStyle
      id={id}
      ref={buttonRef}
      expanded={expanded}
      disabled={disabled}
      selected={selected}
      onClick={onAppClick}
    >
      {icon}
      {expanded && name && <AppText>{name}</AppText>}
    </AppButtonStyle>
  );

  if (!expanded && tooltip) {
    return (
      <Tooltip content={name} placement="bottom" delay={1}>
        {button}
      </Tooltip>
    );
  } else {
    return button;
  }
};

AppButton.defaultProps = {
  id: '',
  buttonRef: null,
  name: '',
  tooltip: true,
  icon: null,
};
