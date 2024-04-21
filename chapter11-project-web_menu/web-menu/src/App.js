import React from "react";
import Menu from "./Menu";
import "./style.css";
import { MenuContextProvider } from "./MenuContext";

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

  const [data, setData] = React.useState({
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
  });

  return (
    <>
      <MenuContextProvider value={data}>
        <header>
          <Menu />
        </header>
      </MenuContextProvider>
      <Main data={data} setData={setData}></Main>
      <footer>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="//reactquickly.dev">React Quickly 2E</a>
      </footer>
    </>
  );
}

// 해당 아이템이 Main 밑으로 들어가면.. 매번 참조자가 달라져서, 다른 객체로 인식함
// 객체는 == 연산할때, 내부의 값을 비교하는게 아니라, 참조자를 비교하기 때문에..
const profileMenuItem = {
  innerText: "Profile",
  iconName: "profile",
  href: "/profile",
};


function Main({ data, setData }) {



  const onClickButton = (evt) => {
    console.log("onclick event handler called!!!");
    console.log("event Object : ", evt);
    if (data.loginUserInformation != null) {
      setData((innerData) => ({
        loginUserInformation: null,
        menuItems: innerData.menuItems.filter(
          (value) => value !== profileMenuItem
        ),
      }));
      return;
    }

    // console.log("loginUserInformationMock ", loginUserInformationMock);
    setData((innerData) => {
      console.log("innerData : ", innerData);
      return {
        menuItems: [...innerData.menuItems, profileMenuItem],
        loginUserInformation: loginUserInformationMock,
      };
    });
    console.log('data\'s "state"', data);
    return;
  };

  
  return (
    <main>
      <h1>Welcome to this website</h1>
      {!data.loginUserInformation ? (
        <button onClick={onClickButton}>log in!!</button>
      ) : (
        <button onClick={onClickButton}>log out!!</button>
      )}
    </main>
  );
}

export default App;
