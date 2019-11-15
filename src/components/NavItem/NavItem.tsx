import React from "react";
import cx from "classnames";
import { IconContext } from "react-icons";

import { A } from "hookrouter";

interface NavItemProps {
  className?: string;
  icon?: any;
  label?: string;
  route: string;
}

const NavItem: React.FC<NavItemProps> = ({
  children,
  className,
  icon,
  label,
  route
}) => {
  const classNames = cx("jan-routeLink", { className: !!className });
  return (
    <div className="jan-NavItem">
      {children ? (
        <A href={route} className={classNames}>
          {children}
        </A>
      ) : (
        <A href={route} className={classNames}>
          <div className="jan-NavItem-Contents">
            <IconContext.Provider value={{ className: "jan-NavItem-Icon" }}>
              {icon}
            </IconContext.Provider>
            <div>{label}</div>
          </div>
        </A>
      )}
    </div>
  );
};

export default NavItem;
