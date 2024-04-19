import React from "react";
import Menu from "./Menu";
import "./style.css";
import MenuContext from "./MenuItemsContext";

// const MenuItemsContext = React.createContext([
//   {
//     innerText: "Home",
//     iconName: "home",
//     href: "/",
//   },
//   {
//     innerText: "Services",
//     iconName: "home",
//     href: "/",
//   },
//   {
//     innerText: "Pricing",
//     iconName: "pricing",
//     href: "/blog",
//   },
//   {
//     innerText: "Blog",
//     iconName: "blog",
//     href: "/blog",
//   },
// ]);

const loginUserInformationMock = {
  userName: "junsu",
  status: "active",
};

function App() {
  // const [menuItems, menuItemsSetter] = React.useState(initialMenuItems);

  const [loginUserInformation, setLoginUserInformation] = React.useState({});

  const onClickButton = (evt) => {
    console.log("event Object : ", evt);
    console.log("onclick event handler called!!!");
    if (loginUserInformation != null) {
      setLoginUserInformation(null);
      return;
    }
    console.log("loginUserInformationMock ", loginUserInformationMock);
    setLoginUserInformation(loginUserInformationMock);
    console.log('loginUserInformation "state"', loginUserInformation);
    return;
  };

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

  return (
    <>
      <MenuContext.Provider value={list}>
        <header>
          <Menu />
        </header>
      </MenuContext.Provider>
      <main>
        <h1>Welcome to this website</h1>
        {loginUserInformation ? (
          <button onClick={onClickButton}>log in!!</button>
        ) : (
          <button onClick={onClickButton}>log out!!</button>
        )}
      </main>
      <footer>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="//reactquickly.dev">React Quickly 2E</a>
      </footer>
    </>
  );
}

export default App;
