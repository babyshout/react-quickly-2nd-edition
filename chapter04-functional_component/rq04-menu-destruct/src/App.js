// import React from 'react';
import './App.css';

function App() {
  return (
    <main>
      <Menu />
    </main>
  )
}
function Menu() {
  return (
    <nav className="navbar">
      <h1 className='title'>TheMenuCompany</h1>
      <ul className='menu'>
        <MenuItem label="Home" href='/' />
          <MenuItem label='About' href='/about/' />
          <MenuItem label="Blog" href="/blog" />
      </ul>
    </nav>
  )
}

function MenuItem({href, label}) {
// function MenuItem(props) {
  // const { href, label } = props;
  return (
    <li className='menu-item'>
      <a className='menu-link' href={href}>
        {label}
      </a>
    </li>
  )
}

export default App;
