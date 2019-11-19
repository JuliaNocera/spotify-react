import React from "react";
import { usePath } from "hookrouter";

import NavItem from "../NavItem";
import { FiHome, FiSearch } from "react-icons/fi";
import { GiBookshelf } from "react-icons/gi";
import cx from "classnames";

import { ROUTES } from "../../lib/routes";
import SpotifyHome from "./SpotifyHome";
import Playlists from "./Playlists";

const isActiveItem = (path: string, navLabel: string) => {
  if (ROUTES[navLabel] === path) {
    return true;
  }
};

const Sidebar: React.FC = () => {
  const path = usePath();
  console.log({ path });
  return (
    <div className="jan-Sidebar">
      <NavItem
        className={cx("jan-Sidebar-item", {
          active: isActiveItem(path, "home")
        })}
        route={ROUTES.home}
      >
        <SpotifyHome />
      </NavItem>
      <NavItem
        className={cx("jan-Sidebar-item", {
          active: isActiveItem(path, "home")
        })}
        icon={<FiHome />}
        label="Home"
        route={ROUTES.home}
      />
      <NavItem
        className={cx("jan-Sidebar-item", {
          active: isActiveItem(path, "search")
        })}
        icon={<FiSearch />}
        label="Search"
        route={ROUTES.search}
      />
      <NavItem
        className={cx("jan-Sidebar-item", {
          active: isActiveItem(path, "library")
        })}
        icon={<GiBookshelf />}
        label="Your Library"
        route={ROUTES.library}
      />
      <Playlists />
    </div>
  );
};

export default Sidebar;
