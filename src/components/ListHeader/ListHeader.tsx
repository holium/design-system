import React, { FC } from 'react';
import { Box, Flex, OptionType } from '..';
import Styled from './ListHeader.styles';
// import { OptionButton } from './ListHeader.styles';
// export { HeaderButton as ListHeaderButton } from './ListHeader.styles';
import { Header, HeaderProps } from './Header';
import Grid2 from '../Grid2';

export type ListHeaderProps = {
  selectedOption?: string;
  options?: OptionType[];
  rightOptions?: React.ReactNode;
  onSelected?: (option: OptionType) => void;
} & HeaderProps;

export const ListHeader: FC<ListHeaderProps> = (
  props: Partial<ListHeaderProps>
) => {
  const {
    title,
    subtitle,
    rightContent,
    options,
    selectedOption,
    rightOptions,
    onBack,
    onSelected,
  } = props;
  return (
    <Header
      title={title}
      subtitle={subtitle}
      rightContent={rightContent}
      onBack={onBack}
    >
      <Flex
        gap={8}
        flexWrap="wrap"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
          gap={8}
        >
          {options?.map((option: OptionType) => (
            <Styled.OptionButton
              key={option.value}
              onClick={() => onSelected(option)}
              selected={option.value === selectedOption}
              disabled={option.disabled}
            >
              {option.label}
            </Styled.OptionButton>
          ))}
        </Flex>
        <Box justifySelf="flex-end">{rightOptions}</Box>
      </Flex>
    </Header>
  );
};

export default { ListHeader };
