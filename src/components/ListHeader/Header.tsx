import React, { FC, isValidElement } from 'react';
import { Flex, Text } from '..';
import Styled from './ListHeader.styles';

export type HeaderProps = {
  title: string | React.ReactNode;
  subtitle?: { patp?: boolean; text: string };
  rightContent?: React.ReactNode;
  children?: React.ReactNode;
  onBack?: () => void;
};

export const Header: FC<HeaderProps> = (props: Partial<HeaderProps>) => {
  const { title, subtitle, rightContent, children, onBack } = props;

  const isCustomTitle = isValidElement(title);
  return (
    <Styled.ListHeaderStyle>
      <Flex
        width="100%"
        flexDirection="row"
        mb={!isCustomTitle ? '8px' : '12px'}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex style={{ flex: 1 }} flexDirection="row" alignItems="center">
          <Flex style={{ flex: 1 }} flexDirection="column">
            {subtitle && (
              <Text
                mb={isCustomTitle ? '1px' : '4px'}
                style={{ opacity: 0.7, cursor: onBack ? 'pointer' : 'default' }}
                variant={subtitle.patp ? 'patp' : 'h6'}
                fontSize={2}
                fontWeight={500}
                onClick={onBack}
              >
                {subtitle.text}
              </Text>
            )}
            {isCustomTitle ? (
              title
            ) : (
              <Text variant="h4" fontWeight={600}>
                {title}
              </Text>
            )}
          </Flex>
        </Flex>
        {rightContent}
      </Flex>
      {children}
    </Styled.ListHeaderStyle>
  );
};
