import React from 'react';
import useContextMenu from './useContextMenu';
import { ContextMenuStyles } from './ContextMenu.styles';
import { MenuItem } from '../MenuItem';

export type ContextMenuProps = {
  containerId: string;
  parentRef: any;
  menuItemtype?: 'neutral' | 'brand';
  menu: any[];
};

export const ContextMenu = (props: ContextMenuProps) => {
  const { containerId, parentRef, menu, menuItemtype } = props;
  const contextMenuRef = React.useRef();
  const { anchorPoint, show } = useContextMenu(
    containerId,
    parentRef,
    contextMenuRef
  );

  const sectionsArray = menu.reduce((arr, obj: any, index: number) => {
    if (!index || arr[arr.length - 1][0].section !== obj.section) {
      return arr.concat([
        [<MenuItem type={menuItemtype} key={index} {...obj} />],
      ]);
    }
    arr[arr.length - 1].push(
      <MenuItem type={menuItemtype} key={index} {...obj} />
    );
    return arr;
  }, []);

  // if (show) {
  return (
    <ContextMenuStyles
      id={`${containerId}-context-menu`}
      className="menu"
      // @ts-ignore
      ref={contextMenuRef}
      style={{
        top: anchorPoint.y,
        left: anchorPoint.x,
        display: show ? 'block' : 'none',
      }}
    >
      {sectionsArray.map((menuSection: any[], index: number) => {
        let divider = <hr />;
        if (index === sectionsArray.length - 1) {
          // @ts-ignore
          divider = undefined;
        }
        return (
          <section key={`section-${index}`}>
            {menuSection}
            {divider}
          </section>
        );
      })}
    </ContextMenuStyles>
  );
  // }
  // return <></>;
};

ContextMenu.defaultProps = {
  menuItemtype: 'neutral',
};

export default ContextMenu;
// With animation test
// <Spring
//   config={{ duration: 10 }}
//   from={{ opacity: 0, x: anchorPoint.x + 10, y: anchorPoint.y + 10 }}
//   to={{ opacity: 1, x: anchorPoint.x, y: anchorPoint.y }}
// >
//   {(springProps: any) => (
//     <ContextMenuStyles
//       id={`${containerId}-context-menu`}
//       className="menu"
//       ref={contextMenuRef}
//       style={{ top: springProps.y, left: springProps.x }}
//     >
//       {sectionsArray.map((menuSection: any[], index: number) => {
//         let divider = <hr />;
//         if (index === sectionsArray.length - 1) {
//           divider = undefined;
//         }
//         return (
//           <div key={`section-${index}`}>
//             {menuSection}
//             {divider}
//           </div>
//         );
//       })}
//     </ContextMenuStyles>
//   )}
// </Spring>;
