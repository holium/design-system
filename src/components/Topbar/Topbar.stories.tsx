import React from 'react';
import { Flex, Search, Icons, AppButton, NavButton, DAOSample } from '../..';
import { Topbar } from './Topbar';

export default {
  title: 'Components/Topbar',
  component: Topbar,
  parameters: {},
};

export const Basic = () => (
  <Topbar
    app={{ name: 'Vote' }}
    ship={{ patp: '~lomder-librun', color: '#ff810a' }}
  />
);

export const SearchBar = () => (
  <Topbar
    app={{ name: 'Vote' }}
    ship={{ patp: '~lomder-librun', color: '#ff810a' }}
  >
    <Flex width={420} inline justifyContent="flex-end">
      <Search />
    </Flex>
  </Topbar>
);

export const DAO = () => (
  <Topbar
    selectedDAO={DAOSample.selectedDAO}
    DAOs={DAOSample.DAOs}
    apps={
      <div
        style={{
          marginLeft: 12,
          display: 'flex',
          gap: 8,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <AppButton
          name="Home"
          icon={<Icons.Home />}
          expanded={false}
          selected={false}
          onAppClick={() => {}}
        />
        <AppButton
          name="Chat"
          icon={<Icons.Chat />}
          expanded={false}
          selected={false}
          onAppClick={() => {}}
        />
        <AppButton
          name="Engram"
          icon={<Icons.Book />}
          expanded={false}
          selected={false}
          onAppClick={() => {}}
        />
        <AppButton
          name="News"
          icon={<Icons.Newspaper />}
          expanded={false}
          selected={false}
          onAppClick={() => {}}
        />
        <AppButton
          name="Members"
          icon={<Icons.Team />}
          expanded={false}
          selected={false}
          onAppClick={() => {}}
        />
        <AppButton
          name="Governance"
          icon={<Icons.Governance />}
          expanded={false}
          selected={false}
          onAppClick={() => {}}
        />
        <AppButton
          name="Treasury"
          icon={<Icons.Safe />}
          expanded={false}
          selected={false}
          onAppClick={() => {}}
        />
      </div>
    }
    ship={{ patp: '~lomder-librun', color: '#ff810a' }}
  >
    <Flex width={420} inline justifyContent="flex-end">
      <Search />
      <NavButton
        id="network"
        style={{ marginLeft: 12 }}
        name="Testnet"
        dropdownWidth={230}
        onClick={() => console.log('colony menu should appear')}
      >
        Testnet
      </NavButton>
    </Flex>
  </Topbar>
);
