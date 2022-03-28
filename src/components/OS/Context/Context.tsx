import React, { FC } from 'react';
import { Flex, Sigil, Text, Icons, useMenu, Menu } from '../../..';
import { MenuItem, MenuOrientation } from '../../Navigation';
import { Spinner } from '../../Spinner';
import { TrayButtonStyle } from '../TrayButton';

export type ContextType =
  | {
      type: 'ship';
      name: string;
      meta: {
        color: string;
      };
    }
  | {
      type: 'group';
      name: string;
      avatar: string;
    };

type ContextProps = {
  style?: any;
  loading?: boolean;
  menuOrientation: MenuOrientation;
  selectedContext?: ContextType;
  availableContexts: ContextType[];
  customMenu?: React.ReactNode;
  onContextClick?: (context: ContextType) => any;
};

export const Context: FC<ContextProps> = (props: ContextProps) => {
  const {
    loading,
    style,
    selectedContext,
    availableContexts,
    customMenu,
    menuOrientation,
    onContextClick,
  } = props;
  const contextButtonRef = React.useRef();
  let show: boolean, setShow: any;

  let config = useMenu(contextButtonRef, {
    orientation: menuOrientation,
    padding: 6,
    // menuWidth,
  });
  show = config.show;
  setShow = config.setShow;

  if (loading) {
    return (
      <TrayButtonStyle
        tabIndex={0}
        style={{ width: 60, justifyContent: 'center', alignItems: 'center' }}
        ref={contextButtonRef}
        paddingLeft="4px"
      >
        <Spinner ml={1} size={0} />
      </TrayButtonStyle>
    );
  }
  let contextLabel = 'No context selected';
  let avatar = null;
  if (selectedContext) {
    switch (selectedContext.type) {
      case 'ship':
        avatar = (
          <Sigil
            patp={selectedContext.name}
            clickable={false}
            size={16}
            borderRadiusOverride="2px"
            color={[selectedContext.meta.color || '#000000', 'white']}
          />
        );
        contextLabel = selectedContext.name;
        break;
      case 'group':
        avatar = selectedContext.avatar ? (
          <img
            style={{ borderRadius: 2 }}
            height="16px"
            width="16px"
            src={selectedContext.avatar}
          />
        ) : (
          <div
            style={{
              height: 16,
              width: 16,
              background: 'black',
              borderRadius: 2,
            }}
          />
        );
        contextLabel = selectedContext.name;
        break;
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <TrayButtonStyle ref={contextButtonRef} style={style} paddingLeft="4px">
        {avatar}
        <Text
          ml="8px"
          variant={
            selectedContext && selectedContext.type === 'ship'
              ? 'patp'
              : 'inherit'
          }
        >
          {!selectedContext ? 'No context selected' : contextLabel}
          <Icons.ExpandMore ml="6px" />
        </Text>
      </TrayButtonStyle>
      {
        <Menu
          id="context-menu"
          style={{
            ...{
              ...(menuOrientation === 'top'
                ? { bottom: 24 + 2 }
                : { top: 24 + 2 }),
            },
            padding: '8px 2px',
            minWidth: 225,
            visibility: show ? 'visible' : 'hidden',
          }}
          isOpen={show}
          onClose={() => {
            setShow(false);
          }}
        >
          {customMenu ||
            availableContexts.map((context: ContextType, i: number) => (
              <MenuItem
                key={`context-${i}`}
                style={{ padding: '8px 8px' }}
                type="neutral"
                onClick={() => {
                  onContextClick(context);
                  setShow(false);
                }}
              >
                {context.type === 'ship' ? (
                  <Flex alignItems="center">
                    <Sigil
                      patp={context.name}
                      clickable
                      size={16}
                      borderRadiusOverride="2px"
                      color={[context.meta.color, 'white']}
                    />
                    <Text
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                      ml="8px"
                      variant="inherit"
                    >
                      {context.name}
                      {/* TODO add notification */}
                      {/* <Icons.ExpandMore ml="6px" /> */}
                    </Text>
                  </Flex>
                ) : (
                  <Flex style={{ width: '100%', flex: 1 }}>
                    <img
                      style={{ borderRadius: 2 }}
                      height="16px"
                      width="16px"
                      src={context.avatar}
                    />

                    <Text
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                      ml="8px"
                      variant="inherit"
                    >
                      {context.name}
                      {/* TODO add notification */}
                      {/* <Icons.ExpandMore ml="6px" /> */}
                    </Text>
                  </Flex>
                )}
              </MenuItem>
            ))}
        </Menu>
      }
    </div>
  );
};

Context.defaultProps = {
  menuOrientation: 'top',
};
