import React, { FC } from 'react';
import { Flex, OptionType } from '..';
import Styled from './ListHeader.styles';
// import { OptionButton } from './ListHeader.styles';
// export { HeaderButton as ListHeaderButton } from './ListHeader.styles';
import { Header, HeaderProps } from './Header';

export type ListHeaderProps = {
  selectedOption?: string;
  options?: OptionType[];
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
        width="100%"
        flexDirection="row"
        mb="1"
        alignItems="center"
        style={{ gap: '8px' }}
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
    </Header>
  );
};
