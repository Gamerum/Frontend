import React from 'react';

import { Badge } from 'primereact/badge';

function Notification() {
  const value: number = 5;

  return (
    <div className="text-2xl">
      <i
        className="pi pi-bell p-overlay-badge text-main-250"
        style={{ fontSize: '1.5rem' }}
      >
        <Badge value={value}></Badge>
      </i>
    </div>
  );
}

export default Notification;
