import * as React from 'react';
import { Flex, IntentTypes, Icons } from '../';
import { TagStyle, TagIcon } from './Tag.styles';

export type TagProps = {
  label: string;
  minimal?: boolean;
  custom?: string;
  intent: IntentTypes;
  icon?: any;
  rounded?: boolean;
  removable?: boolean;
  onRemove?: (evt: any) => any;
};

export const Tag: any = (props: TagProps) => {
  const { label, icon, intent, minimal, removable, onRemove, rounded, custom } =
    props;
  return (
    <TagStyle
      intent={intent}
      minimal={minimal}
      custom={custom}
      rounded={rounded}
    >
      {icon && <TagIcon>{icon}</TagIcon>}
      {label}
      {removable && (
        <Flex inline ml={2} style={{ cursor: 'pointer' }} onClick={onRemove}>
          <Icons.Close />
        </Flex>
      )}
    </TagStyle>
  );
};

Tag.defaultProps = {
  intent: 'info',
  minimal: false,
};
