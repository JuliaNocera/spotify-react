import React from "react";

import Home from "../components/Home";
import Library from "../components/Library";
import Search from "../components/Search";

export const ROUTES = {
  home: "/",
  library: "/library/",
  search: "/search/"
};

export const routeObject = {
  "/": () => <Home />,
  "/library/": () => <Library />,
  "/search/": () => <Search />
};
