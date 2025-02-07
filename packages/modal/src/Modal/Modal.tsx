import React from 'react';
import PropTypes from 'prop-types';

import { PopoverProvider } from '@leafygreen-ui/leafygreen-provider';

import ModalView from './ModalView';
import { CloseIconColor, ModalProps } from './types';

/**
 *
 *  Modals place content on top of main window.
 *
 * @param props.open Boolean to describe whether or not Modal is open.
 * @param props.size String to determine size of Modal. ['small', 'default', 'large']
 * @param props.setOpen Callback to change the open state of Modal.
 * @param props.children Content to appear inside of Modal container.
 * @param props.shouldClose Callback to determine whether or not Modal should close when user tries to close it.
 * @param props.className className applied to container div.
 * @param props.contentClassName className applied to overlay div.
 * @param props.initialFocus By default, when a focus trap is activated the first element in the focus trap's tab order will receive focus. With this option you can specify a different element to receive that initial focus. Selector string (which will be passed to document.querySelector() to find the DOM node).
 * @param props.closeIconColor Choose between dark or light close icon. Default is dark.
 */
function Modal({
  open,
  size,
  setOpen,
  shouldClose,
  darkMode,
  children,
  className,
  contentClassName,
  initialFocus,
  closeIconColor,
  ...rest
}: ModalProps) {
  const props = {
    open,
    size,
    setOpen,
    shouldClose,
    darkMode,
    children,
    className,
    contentClassName,
    initialFocus,
    closeIconColor,
    ...rest,
  };

  return (
    <PopoverProvider>
      <ModalView {...props} />
    </PopoverProvider>
  );
}

Modal.displayName = 'Modal';

Modal.propTypes = {
  open: PropTypes.bool,
  size: PropTypes.string,
  children: PropTypes.node,
  shouldClose: PropTypes.func,
  className: PropTypes.string,
  setOpen: PropTypes.func,
  darkMode: PropTypes.bool,
  closeIconColor: PropTypes.oneOf(Object.values(CloseIconColor)),
};

export default Modal;
