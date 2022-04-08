import * as React from 'react';
import { sigil, reactRenderer } from '@tlon/sigil-js';
import { Menu, useMenu } from '../..';
import { AvatarWrapper, SigilStyle } from './Sigil.styles';

export type SigilProps = {
  patp: string;
  avatar?: string;
  nickname?: string;
  size: number;
  simple?: boolean;
  contextMenu?: React.ReactNode;
  borderRadiusOverride?: string;
  color: [string, string];
  clickable?: boolean;
};

export const Sigil: any = (props: SigilProps) => {
  const { avatar, clickable, borderRadiusOverride, contextMenu } = props;
  const sigilRef = React.useRef();
  let anchorPoint: any, show: boolean, setShow: any;
  const menuWidth = 180;
  // Get the popup anchor
  if (clickable) {
    let config = useMenu(sigilRef, {
      orientation: 'bottom-left',
      padding: 6,
      menuWidth,
    });
    anchorPoint = config.anchorPoint;
    show = config.show;
    setShow = config.setShow;
  }
  const sigilSize = props.size / 2;
  const horizontalPadding = sigilSize / 2;
  let element: React.ReactNode;
  if (avatar) {
    element = (
      <AvatarWrapper
        id="ship"
        tabIndex={clickable ? 0 : -1}
        ref={sigilRef}
        style={{ borderRadius: borderRadiusOverride || 4 }}
        clickable={clickable}
        onClick={(evt: any) => {
          evt.preventDefault();
          evt.currentTarget.blur();
          clickable && !show && setShow && setShow(true);
        }}
        active={clickable && show}
        borderRadiusOverride={borderRadiusOverride}
      >
        <img
          style={{ borderRadius: borderRadiusOverride || 4 }}
          height={props.size}
          width={props.size}
          src={avatar}
        />
      </AvatarWrapper>
    );
  } else {
    const isValid = props.patp.split('-').length <= 2;
    element = (
      <SigilStyle
        id="ship"
        tabIndex={clickable ? 0 : -1}
        ref={sigilRef}
        clickable={clickable}
        onClick={(evt: any) => {
          evt.preventDefault();
          evt.currentTarget.blur();
          clickable && !show && setShow && setShow(true);
        }}
        active={clickable && show}
        borderRadiusOverride={borderRadiusOverride}
        sigilColor={props.color[0]}
        sigilSize={props.size}
        style={{
          paddingLeft: horizontalPadding,
          paddingRight: horizontalPadding,
        }}
      >
        {isValid ? (
          sigil({
            patp: props.patp,
            renderer: reactRenderer,
            size: props.size / 2,
            icon: props.simple,
            colors: props.color,
            margin: false,
          })
        ) : (
          <div
            style={{
              backgroundColor: props.color[0],
              width: props.size / 2,
              height: props.size / 2,
            }}
          />
        )}
      </SigilStyle>
    );
  }
  return (
    <>
      {element}
      <Menu
        id={`${props.patp}-user-menu`}
        style={{
          top: anchorPoint && anchorPoint.y + 6,
          left: anchorPoint && anchorPoint.x + 8,
          padding: '8px 4px',
          visibility: show ? 'visible' : 'hidden',
          width: menuWidth,
        }}
        isOpen={show}
        onClose={() => {
          setShow(false);
        }}
      >
        {contextMenu}
      </Menu>
    </>
  );
};

Sigil.defaultProps = {
  size: 30,
  simple: true,
  clickable: false,
};
