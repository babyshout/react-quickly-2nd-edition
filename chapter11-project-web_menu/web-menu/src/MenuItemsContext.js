import { createContext } from "react";

const MenuContext = createContext([
    {
      innerText: "Home",
      iconName: "home",
      href: "/",
    },
    {
      innerText: "Services",
      iconName: "home",
      href: "/",
    },
    {
      innerText: "Pricing",
      iconName: "pricing",
      href: "/blog",
    },
    {
      innerText: "Blog",
      iconName: "blog",
      href: "/blog",
    },
  ]);

export default MenuContext;