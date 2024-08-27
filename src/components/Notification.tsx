import React, { useRef, useState } from 'react';
import { Badge } from 'primereact/badge';
import { TieredMenu } from 'primereact/tieredmenu';
import { TieredMenu as TieredMenuType } from 'primereact/tieredmenu';

function Notification() {
  const menu = useRef<TieredMenuType>(null);
  const [notifications, setNotifications] = useState(generateNotifications());

  function generateNotifications() {
    const randomNotifications = Array.from({ length: 5 }, (_, i) => ({
      label: `Notification ${i + 1}`,
      icon: 'pi pi-info-circle',
      command: () => console.log(`Notification ${i + 1} clicked`),
    }));
    return randomNotifications;
  }

  const items = notifications.map((notification) => ({
    label: notification.label,
    icon: notification.icon,
    command: notification.command,
  }));

  return (
    <div className="relative text-2xl">
      <i
        className="pi pi-bell p-overlay-badge cursor-pointer header-buttons text-main-250"
        style={{ fontSize: '1.5rem' }}
        onClick={(e) => menu.current?.toggle(e)}
      >
        <Badge value={notifications.length} />
      </i>
      <TieredMenu
        model={items}
        popup
        ref={menu}
        className="notification-menu bg-main-850 border border-secondary-350 rounded-lg text-main-300"
      />
    </div>
  );
}

export default Notification;
