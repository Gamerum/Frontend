import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu as PrimeMenu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { useScrollableContext } from '../contexts/ScrollableContext';
import { useMountEffect } from 'primereact/hooks';

interface MenuProps {
  menuItems: MenuItem[];
  buttonProps?: React.ComponentProps<typeof Button>;
  menuProps?: React.ComponentProps<typeof PrimeMenu>;
}

const Menu: React.FC<MenuProps> = ({
  menuItems,
  buttonProps = {},
  menuProps = {},
}) => {
  const menu = useRef<PrimeMenu>(null);
  const scrollableParentRef = useScrollableContext();

  useMountEffect(() => {
    const handleScroll = (event: Event) => {
      const menuElement = menu.current?.getElement();

      if (menuElement) {
        menu.current?.hide({
          ...event,
          persist: () => {},
          nativeEvent: event,
        } as unknown as React.SyntheticEvent);
      }
    };

    const scrollableElement = scrollableParentRef?.current;
    if (scrollableElement) {
      scrollableElement.addEventListener('scroll', handleScroll);
    }
  });

  return (
    <>
      <Button
        aria-label="Options"
        onClick={(event) => menu.current?.toggle(event)}
        {...buttonProps}
      />
      <PrimeMenu model={menuItems} ref={menu} {...menuProps} />
    </>
  );
};

export default Menu;
