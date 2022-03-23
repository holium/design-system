import React from 'react';
import { Topbar, PaneHeader, PaneHeaderText, TextButton } from '../..';
import { Top, Fill } from './Page.styles';
import { Page, PageProps } from './Page';

export default {
  title: 'Components/Page',
  component: Page,
  parameters: {},
};

// @ts-ignore
const Template: Story = (args: Partial<PageProps>) => (
  <Fill
    style={{
      height: 800,
      width: '100%',
      border: '1px solid lightgray',
    }}
  >
    <Top centerVertical size={30} spacing={16}>
      <Topbar
        colony={{
          name: 'Mars One',
          crest: (
            <img
              style={{ objectFit: 'cover', borderRadius: 33 }}
              height={20}
              width={20}
              src={
                'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL21hcnMtYTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTB9fX0='
              }
            />
          ),
        }}
        app={{ name: 'Polls' }}
        apps={[]}
        ship={{ patp: '~lomder-librun', color: '#ff810a' }}
      />
    </Top>
    <Fill>
      <Page spacing={16} {...args}>
        <PaneHeader noBorder={!args.bordered}>
          <PaneHeaderText>Polls</PaneHeaderText>
          <TextButton onClick={() => console.log('clicked')}>
            + Create
          </TextButton>
        </PaneHeader>
      </Page>
    </Fill>
  </Fill>
);

export const Full = Template.bind({});
Full.args = {
  type: 'full',
  noCard: false,
  bordered: true,
};

export const FullOnSurface = Template.bind({});
FullOnSurface.args = {
  type: 'full',
  noCard: true,
  bordered: false,
};

export const Sidebar = Template.bind({});
Sidebar.args = {
  type: 'sidebar',
  noCard: false,
  bordered: true,
};

export const Centered = Template.bind({});
Centered.args = {
  type: 'centered',
  noCard: false,
  bordered: true,
};

export const RightPane = Template.bind({});
RightPane.args = {
  type: 'sidebar',
  noCard: false,
  bordered: true,
  rightPane: <div></div>,
};
