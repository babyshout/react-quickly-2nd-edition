import { useContext, createContext } from "react";

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

const list = {
    loginUserInformation: null,
    menuItems: [
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
    ],
  };
//   const profileMenuItem = {
//     innerText: 'Profile',
//     iconName: 'profile',
//     href: '/profile',
//   }
  


export function useMenuContext() {
    return useContext(MenuContext)
}

export function MenuContextProvider({value = list, children}) {
    useMenuContext();
    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    )
}

// const useMenuContexts = {useMenuContext, MenuContextProvider}

// export default useMenuContexts;