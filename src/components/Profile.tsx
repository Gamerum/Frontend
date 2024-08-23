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
        className="bg-main-850 border border-secondary-350 rounded-lg text-main-250 p-2"
        ref={op}
        dismissable
      >
        <ul className="space-y-2">
          <li>
            <strong>User:</strong>
            <Link to="/profile">{username}</Link>

            <hr />
          </li>

          {profileItems.map((group, index) => (
            <div key={index}>
              {group.map((item) => (
                <li key={item.label}>
                  {item.path ? (
                    <Link to={item.path}>
                      {item.icon && <i className={item.icon}></i>}
                      {item.label}
                    </Link>
                  ) : (
                    <span>
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
