import React from 'react';
import { Avatar } from 'primereact/avatar';
function Profile() {
  return (
    <div>
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        size="large"
        shape="circle"
      />
    </div>
  );
}

export default Profile;
