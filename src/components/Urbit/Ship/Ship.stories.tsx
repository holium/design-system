import React from 'react';
import { Ship } from './Ship';

export default {
  title: 'Components/Urbit/Ship',
  component: Ship,
  parameters: {},
};

export const Basic = () => <Ship patp="~lomder-librun" color="#ff810a" />;
