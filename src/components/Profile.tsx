import React, { useRef } from 'react';
import { Avatar } from 'primereact/avatar';
import { OverlayPanel } from 'primereact/overlaypanel';
import profileItems from '../constants/profileItems';
import { Link } from 'react-router-dom';
function Profile() {
  const op = useRef<OverlayPanel>(null);
  const username = 'username';
  return (
    <div>
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        size="large"
        onClick={(e) => op.current?.toggle(e)}
        style={{ cursor: 'pointer' }}
        shape="circle"
      />
      <OverlayPanel
        className="bg-main-850 border border-secondary-350 rounded-lg text-main-300 p-2"
        ref={op}
        dismissable
      >
        <ul className="space-y-1">
          <li className="gap-2 flex items-center hover:text-main-500">
            <strong>
              <i className="pi pi-user"></i>
            </strong>
            <Link to="/profile">{username}</Link>
          </li>
          <hr />
          {profileItems.map((group, index) => (
            <div key={index} className="space-y-2 py-1 ">
              {group.map((item) => (
                <li key={item.label} className="gap-2 flex items-center">
                  {item.path ? (
                    <Link
                      to={item.path}
                      className="gap-2 flex items-center hover:text-main-500"
                    >
                      {item.icon && <i className={item.icon}></i>}
                      {item.label}
                    </Link>
                  ) : (
                    <span className="gap-2 flex items-center ">
                      {item.icon && <i className={item.icon}></i>}
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </div>
          ))}
        </ul>
      </OverlayPanel>
    </div>
  );
}

export default Profile;
