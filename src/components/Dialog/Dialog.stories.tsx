import React from 'react';
import {
  withKnobs,
  text,
  boolean,
  number,
  optionsKnob,
} from '@storybook/addon-knobs';

import { Button, Icons, Text } from '../..';

import { Dialog, useDialog } from './';

export default {
  title: 'Components/Dialog',
  decorators: [withKnobs],
  component: Dialog,
  parameters: {},
};

const Template = (args?: any) => {
  const { isShowing, toggle } = useDialog();

  return (
    <div>
      <Button variant="primary" onClick={toggle}>
        Show modal
      </Button>
      <Dialog
        title={text('Title', 'Dialog header')}
        backdropOpacity={number('backdropOpacity', 0.05)}
        isShowing={isShowing}
        variant={args.variant}
        onHide={toggle}
        primaryButton={
          <Button
            onClick={() => {
              console.log('do something, then close');
              toggle();
            }}
          >
            Save
          </Button>
        }
        secondaryButton={
          <Button variant="transparent" onClick={toggle}>
            Dismiss
          </Button>
        }
        {...args}
      >
        <div>
          <Text>Hello, I'm a modal.</Text>
          <Text>That can become quite long.</Text>
          <Text>line 3</Text>
          <Text>line 3</Text>
          <Text>line 3</Text>
          <Text>line 3</Text>
          <Text>line 3</Text>
          <Text>line 3</Text>
          <Text>line 3</Text>
        </div>
      </Dialog>
    </div>
  );
};

const storybKnobs = {
  title: text('Title', 'Dialog header'),
  backdropOpacity: number('backdropOpacity', 0.05),
  hasCloseButton: boolean('hasCloseButton', true),
  closeOnBackdropClick: boolean('closeOnBackdropClick', true),
  variant: optionsKnob(
    'variant',
    {
      bordered: 'bordered',
      simple: 'simple',
    },
    'bordered',
    { display: 'select' }
  ),
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  ...storybKnobs,
};

export const Icon = Template.bind({});
Icon.args = {
  ...storybKnobs,
  icon: <Icons.Apps2 />,
};
