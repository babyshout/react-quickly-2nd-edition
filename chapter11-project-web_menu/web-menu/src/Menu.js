import MenuItem from "./MenuItem.js";
import {useMenuContext} from './MenuContext.js'

function Menu() {
  const menuContext = useMenuContext();
  console.log(menuContext)
  return (
    <nav className="menu">
      {menuContext.menuItems.map((item) => {
        // console.log(item);
        return (
          <MenuItem key={item.innerText} href={item.href} icon={item.iconName}>
            {item.innerText}
          </MenuItem>
        );
      })}

      {/* <MenuItem href="/" icon="home">
        Home
      </MenuItem>
      <MenuItem href="/" icon="home">
        Services
      </MenuItem>
      <MenuItem href="/pricing" icon="pricing">
        Pricing
      </MenuItem>
      <MenuItem href="/blog" icon="blog">
        Blog
      </MenuItem> */}
    </nav>
  );
}

export default Menu;
