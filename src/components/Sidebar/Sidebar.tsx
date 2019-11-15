import React from "react";

import NavItem from "../NavItem";
import { FiHome, FiSearch } from "react-icons/fi";
import { GiBookshelf } from "react-icons/gi";

import { ROUTES } from "../../lib/routes";
import "./Sidebar.css";
import SpotifyHome from "./SpotifyHome";
import Playlists from "./Playlists";

const Sidebar: React.FC = () => (
  <div className="jan-Sidebar">
    <NavItem route={ROUTES.home}>
      <SpotifyHome />
    </NavItem>
    <NavItem icon={<FiHome />} label="Home" route={ROUTES.home} />
    <NavItem icon={<FiSearch />} label="Search" route={ROUTES.search} />
    <NavItem
      icon={<GiBookshelf />}
      label="Your Library"
      route={ROUTES.library}
    />
    <Playlists />
  </div>
);

export default Sidebar;
