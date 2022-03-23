import React from 'react';
import styled from 'styled-components';
import { compose, space, color, typography } from 'styled-system';

export type ResultListProps = {
  results: any[];
};

export const ResultList = styled(styled.div`
  display: inline-flex;
  flex-direction: column;
`)(compose(space, color, typography));

export const SearchResultList = React.memo(({ results }: ResultListProps) => {
  // api call to results
  // mocked for now
  const hasResults = results.length;
  return (
    <ResultList>
      {!hasResults ? (
        <div className="no-suggestions">
          <span role="img" aria-label="tear emoji">
            😪
          </span>{' '}
          <em>sorry no suggestions</em>
        </div>
      ) : (
        results.map((result: any, index: number) => (
          <div key={`${index}`}>Result: {result.content.toString()}</div>
        ))
      )}
      {/* {loading && (
        <Flex justifyContent="center" alignItems="center">
          <Spinner size={2} />
        </Flex>
      )} */}
    </ResultList>
  );
});
