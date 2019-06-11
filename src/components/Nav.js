import React from 'react';
import { NavLink } from 'react-router-dom';

const active = {
  color: '#C73C11',
};

const container = {
  display: 'block',
  width: '900px',
  height: '50px',
  backgroundColor: 'grey',
  margin: '0 auto',
  paddingTop: '30px',
  paddingLeft: '50px',
  marginBottom: '60px',
};
const styledNav = {
  padding: '0',
  margin: '0',
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-around',
  width: '300px',
  height: 'auto',
};

const styledLink = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '25px',
  textTransform: 'uppercase',
  fontFamily: 'Arial',
};

const Nav = () => (
  <div style={container}>
    <ul style={styledNav}>
      <li>
        <NavLink to="/" exact activeStyle={active} style={styledLink}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={active} style={styledLink}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/pets" activeStyle={active} style={styledLink}>
          Pets
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
