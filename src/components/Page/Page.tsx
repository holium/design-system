import * as React from 'react';
// TODO totally redo this
import {
  PageStyle,
  SidebarStyle,
  PaneStyle,
  RightPaneStyle,
  Fill,
  Top,
  ViewPort,
} from './Page.styles';

type PageType = 'full' | 'sidebar' | 'centered';

export type PageProps = {
  type: PageType;
  bordered: boolean;
  noCard: boolean;
  sidebar?: React.ReactNode;
  rightPane?: React.ReactNode;
  spacing?: number;
  children?: React.ReactNode;
};

// TODO mobile responsive logic
export const Page: any = (props: PageProps) => {
  const { type, spacing } = props;
  let pageInner: any = null;
  switch (type) {
    case 'full':
      pageInner = <FullPage {...props} />;
      break;
    case 'sidebar':
      pageInner = <Sidebar {...props} />;
      break;

    case 'centered':
      pageInner = <CenteredPane {...props} />;
      break;
  }
  return (
    <PageStyle margin={spacing}>
      {pageInner}
      {props.rightPane && (
        <RightPaneStyle size={300}>{props.rightPane}</RightPaneStyle>
      )}
    </PageStyle>
  );
};

const FullPage = (props: Partial<PageProps>) => {
  return (
    <PaneStyle noBorder={!props.bordered} noCard={props.noCard}>
      {props.children}
    </PaneStyle>
  );
};

const Sidebar = (props: Partial<PageProps>) => {
  return (
    <Fill row>
      <SidebarStyle size={300}>{props.sidebar}</SidebarStyle>
      <PaneStyle>{props.children}</PaneStyle>
    </Fill>
  );
};

const CenteredPane = (
  props: Partial<PageProps> & { width?: number | string; style?: any }
) => {
  return (
    <Fill style={props.style}>
      {/* TODO make paneWidth props */}
      <PaneStyle
        noBorder={!props.bordered}
        noCard={props.noCard}
        style={{
          margin: '0 auto',
          width: props.width ? props.width : 976,
        }}
      >
        {props.children}
      </PaneStyle>
    </Fill>
  );
};

const PageTop = (props: any) => {
  return (
    <Top centerVertical size={32}>
      {props.children}
    </Top>
  );
};

const PageViewPort = (props: any) => {
  return <ViewPort>{props.children}</ViewPort>;
};

Page.defaultProps = {
  type: 'full',
  bordered: true,
  onSurface: false,
  spacing: 0,
};

CenteredPane.defaultProps = {
  bordered: true,
  onSurface: false,
  spacing: 0,
};

export { CenteredPane, Sidebar, FullPage, PageTop, PageViewPort };
