import * as React from 'react';

import { Sigil, Flex, Text, Tag } from '../../';
import { Notification } from '../../Notification';

export type GroupProps = {
  patp: string;
  name: string;
  color?: string;
  size?: 'medium' | 'small';
  menuOptions?: Array<{
    label: string;
    value: string;
  }>;
  clickable: boolean;
  sigil?: boolean;
  trailingInfo?: 'Type' | 'Notification';
  entity: 'Group' | 'DAO';
  type?: boolean;
  notification?: number;
  infoBeneath?: 'Link' | 'Participant';
  link?: string;
  participantNumber?: number | 0;
  participantType?: string | 'participants';
  image?: string;
  customColour?: string;
  noAttachments?: boolean;
};

export const Group: any = (props: GroupProps) => {
  return (
    <Flex
      style={{ gap: 8 }}
      alignItems="center"
      padding={[4, 0, 4, 0]}
      flexDirection="row"
    >
      {props.sigil && (
        <Sigil
          clickable={props.clickable}
          size={props.size === 'medium' ? 32 : 24}
          patp={props.patp}
          color={props.color ? [props.color, 'white'] : ['black', 'white']}
          orientation="bottom"
          menuOptions={props.menuOptions}
          entity={props.entity}
        />
      )}

      <Flex
        flexDirection="row"
        justifyContent={
          props.type
            ? 'space-between'
            : props.notification
            ? 'space-between'
            : 'flex-start'
        }
        alignItems="flex-end"
        padding="0px"
        minWidth={props.noAttachments === true ? 0 : '320px'}
        maxWidth="100%"
      >
        <Flex flexDirection="column" alignItems="flex-start">
          <Text style={{ opacity: 0.75 }} variant="h5" fontByType="monospace">
            {props.name}
          </Text>
          {props.link && (
            <Text
              style={{ opacity: 0.75 }}
              variant="body"
              fontByType="monospace"
            >
              {props.link}
            </Text>
          )}
          {props.participantNumber && (
            <Text
              style={{ opacity: 0.5 }}
              variant="body"
              fontByType="monospace"
            >
              {`${props.participantNumber} ${props.participantType}`}
            </Text>
          )}
        </Flex>

        {props.notification && (
          <Notification colour={props.customColour}>
            {props.notification}
          </Notification>
        )}
        {props.type && (
          <Tag
            label={props.entity}
            minimal={true}
            custom={props.customColour}
          />
        )}
      </Flex>
    </Flex>
  );
};

Group.defaultProps = {
  patp: '~lomder-librun',
  name: 'Holons',
  color: '#ff810a',
  size: 'medium',
  entity: 'Group',
};
