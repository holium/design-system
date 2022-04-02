// Links:
// - https://github.com/nextapps-de/flexsearch

import React, { useState } from 'react';
import { SearchWrapper } from './Search.styles';
import { Input } from '../';
import { Icons, Menu, Spinner, Flex } from '..';
import { SearchResultList } from './ResultList';

const mockResults = [
  {
    id: 'jYZJ0q0PB',
    content: 'Metaverse',
    type: 'entry',
    app: 'lore',
    link: 'plymouth://terminus-dao/lore/topic/metaverse',
  },
  {
    id: 'Eq8glXWgK',
    content: 'Metaverse',
    type: 'entry',
    app: 'lexicon',
    link: 'plymouth://terminus-dao/lexicon/metaverse',
  },
  {
    id: 'A6NO6lDrO',
    content: 'New platform, who dis? Am I in the metaverse?',
    type: 'text',
    room: 'FANG',
    app: 'campfire',
    link: 'plymouth://terminus-dao/campfire/FANG/A6NO6lDrO',
    identity: '',
    timestamp: 1627908749516,
  },
  {
    id: 'A6NO6lDrO',
    content:
      '@0xamogh market cap, just base a guess off shiba and doge which have literally 0 utility, and then compare those 2 to a tokenomic which will change the game in the metaverse.',
    type: 'text',
    room: 'crypto-zone',
    app: 'campfire',
    link: 'plymouth://terminus-dao/campfire/crypto-zone/oZVBYmYnN',
    timestamp: 1627908749516,
  },
  {
    id: 'Eq8ggK7EN',
    content: {
      headline: 'Zuck wages war on crypto',
      preview:
        'Facebook has renamed itself to “Meta” in a bid to steal the metaverse from the open and decentralized Web 3 movement...',
      link: 'https://www.theverge.com/2021/11/16/22785397/meta-facebook-leak-lockdown',
      source: 'theverge.com',
    },
    type: 'struct',
    room: 'crypto-zone',
    app: 'campfire',
    link: 'plymouth://terminus-dao/campfire/FANG/Eq8ggK7EN',
    timestamp: 1627908749516,
  },
];

export const Search = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setInputSearchQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState(mockResults);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);

  const onChange = (e) => {
    const userInput = e.target.value;
    // Filter our suggestions that don't contain the user's searchQuery
    const unLinked = mockResults.filter(
      (suggestion) =>
        suggestion.content
          .toString()
          .toLowerCase()
          .indexOf(userInput.toLowerCase()) > -1
    );

    setInputSearchQuery(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  // const onClick = (e) => {
  //   setFilteredSuggestions([]);
  //   setInputSearchQuery(e.target.innerText);
  //   setActiveSuggestionIndex(0);
  //   setShowSuggestions(false);
  // };

  const onKeyDown = (e) => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      setInputSearchQuery(e.target.value);
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) {
        return;
      }

      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return;
      }

      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };

  return (
    <SearchWrapper>
      <Input
        name="topbar-search"
        spellCheck={false}
        borderRadius={30}
        autoComplete="off"
        pt="6px"
        pb="6px"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={searchQuery}
        placeholder="Search..."
        leftIcon={<Icons.Search aria-hidden />}
      />

      {searchQuery && (
        <Menu
          style={{
            top: '100%',
            padding: '8px 12px',
            width: 'calc(100% - 20px)',
            margin: '0 10px',
            marginTop: 4,
          }}
          isOpen
          onClose={() => {
            setInputSearchQuery('');
          }}
        >
          {!showSuggestions && (
            <Flex justifyContent="center" alignItems="center">
              <Spinner size={2} />
            </Flex>
          )}
          {showSuggestions && (
            <SearchResultList results={filteredSuggestions} />
          )}
        </Menu>
      )}
    </SearchWrapper>
  );
};

export default Search;
