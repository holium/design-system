import React from 'react';
import styled from 'styled-components';
import { compose, space, color, layout } from 'styled-system';
import { Flex } from '../..';
import { ContextMenu } from './ContextMenu';

const Section = styled(styled.div`
  width: 200px;
  height: 200px;
  background-color: gray;
  border-radius: 6px;
  margin: 0 2px;
`)({}, compose(space, layout, color));

export default {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  parameters: {
    // docs: {
    //   page: () => (
    //     <>
    //       <Title />
    //       <Description>Building block of layouts. Creates a box-model context</Description>
    //       <Props of={Box} />
    //     </>
    //   ),
    // },
  },
};

export const Basic = (args: any) => {
  const id = `context-menu-${Math.random()}`;
  const parentRef = React.useRef();

  return (
    <Flex flexDirection="row">
      <Section ref={parentRef} id={id}>
        <ContextMenu
          menu={[
            { label: 'Mark as read', onClick: () => {} },
            {
              label: 'Mute room',
              onClick: () => {},
              subMenu: [{ label: '1 hour', onClick: () => {} }],
            },
            {
              label: 'Invite members',
              intent: 'primary',
              section: 2,
              onClick: () => {},
            },
            {
              label: 'Copy link',
              section: 3,
              onClick: () => {},
            },
          ]}
          containerId={id}
          parentRef={parentRef}
          {...args}
        />
      </Section>
    </Flex>
  );
};
