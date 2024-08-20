import React from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';

import { Badge } from 'primereact/badge';

function Notification() {
  return (
    <div className="text-2xl">
      <IoNotificationsOutline className="text-main-250">
        <Badge value="2"></Badge>
      </IoNotificationsOutline>
    </div>
  );
}

export default Notification;
