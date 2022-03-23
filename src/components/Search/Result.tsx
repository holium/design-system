import * as React from 'react';
import styled from 'styled-components';
import { compose, space, color, typography } from 'styled-system';

export type ResultType = 'app' | 'campfire' | 'article';

export type ResultProps = { theme?: any; type: ResultType };

export const ResultRow = styled(styled.div`
  display: inline-flex;
  flex-direction: row;
`)(compose(space, color, typography));

export const SearchResult = (props: ResultProps) => <ResultRow></ResultRow>;
