import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Box, Card, IconButton, Icons, Text } from '../';
import {
  DialogHeader,
  DialogOverlay,
  DialogWrapper,
  DialogContainer,
  DialogBody,
  DialogFooter,
  DialogFooterButtons,
} from './Dialog.styles';

type DialogProps = {
  title?: string;
  icon?: React.ReactNode;
  variant: 'simple' | 'bordered';
  hasCloseButton: boolean;
  primaryButton?: React.ReactNode;
  secondaryButton?: React.ReactNode;
  backdropOpacity: number;
  closeOnBackdropClick: boolean;
  // passed in from useDialog
  isShowing: boolean;
  onHide: (...args: any) => any;
};

export const Dialog: FC<DialogProps> = ({
  title,
  icon,
  isShowing,
  backdropOpacity,
  primaryButton,
  secondaryButton,
  hasCloseButton,
  closeOnBackdropClick,
  variant,
  children,
  onHide,
}) => {
  const hasFooter = primaryButton || secondaryButton;
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <DialogOverlay backdropOpacity={backdropOpacity} />
          <DialogWrapper
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
            onClick={closeOnBackdropClick ? onHide : null}
          >
            <DialogContainer variant={variant}>
              <Card
                padding={0}
                style={{ borderRadius: 12 }}
                elevation="none"
                paddingBottom={hasFooter ? 16 : 0}
                onClick={(evt: any) => evt.stopPropagation()}
              >
                {title && (
                  <DialogHeader variant={variant}>
                    <Box alignItems="center">
                      {icon && (
                        <Box alignItems="center" mr={2}>
                          {icon}
                        </Box>
                      )}
                      <Text fontSize="16px" fontWeight="bold">
                        {title}
                      </Text>
                    </Box>
                    {hasCloseButton && (
                      <IconButton
                        data-dismiss="modal"
                        aria-label="Close"
                        tabIndex={-1}
                        onClick={onHide}
                      >
                        <Icons.Close size="20px" />
                      </IconButton>
                    )}
                  </DialogHeader>
                )}
                <DialogBody variant={variant} hasHeader={title}>
                  {children}
                </DialogBody>
                {(primaryButton || secondaryButton) && (
                  <DialogFooter>
                    <DialogFooterButtons>
                      {secondaryButton}
                      {primaryButton}
                    </DialogFooterButtons>
                  </DialogFooter>
                )}
              </Card>
            </DialogContainer>
          </DialogWrapper>
        </React.Fragment>,
        document.body
      )
    : null;
};

Dialog.defaultProps = {
  backdropOpacity: 0.2,
  variant: 'bordered',
  hasCloseButton: true,
  closeOnBackdropClick: true,
};

export default Dialog;
