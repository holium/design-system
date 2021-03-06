import React from 'react';
import ReactDOM from 'react-dom';
import { MenuWrapper } from './Menu.styles';

interface IProps {
  id: any;
  preventDefault?: boolean;
  style?: any;
  isOpen: boolean;
  clickableRef?: any;
  onClose: (...args: any) => any;
}

interface IState {
  isOpen?: boolean;
}

//
// Docs:
//    button attribute to prevent close menu: data-prevent-menu-close
//
export class Menu extends React.PureComponent<IProps, IState> {
  static defaultProps = {
    isOpen: false,
    id: Math.random(),
    preventDefault: true,
  };
  menuRef: any;

  constructor(props: any) {
    super(props);

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.menuRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside = (event: any) => {
    const { isOpen, onClose, preventDefault } = this.props;
    const domNode = ReactDOM.findDOMNode(this.menuRef.current);
    if (!domNode || !domNode.contains(event.target)) {
      // You are clicking outside
      if (isOpen) {
        preventDefault && event.preventDefault();
        onClose();
      }
    } else {
      // You are clicking inside
      const clickedNode = ReactDOM.findDOMNode(event.target);
      const preventMenuClose = event.target.getAttribute(
        'data-prevent-menu-close'
      );
      if (clickedNode.nodeName === 'LI' || clickedNode.nodeName === 'BUTTON') {
        !preventMenuClose && onClose();
      }
    }
  };

  render() {
    const { children, style, isOpen, id } = this.props;
    return (
      <MenuWrapper
        id={id}
        ref={(node) => (this.menuRef.current = node)}
        style={{ display: isOpen ? 'flex' : 'none', ...style }}
        role="list"
      >
        {children}
      </MenuWrapper>
    );
  }
}

export default Menu;
