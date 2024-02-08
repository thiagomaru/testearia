import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './styles'

const Header = () => (
  <header>
    <HeaderContainer>
    <nav>
      <ul>
        <li><Link to="/" style={{color: 'white'}}>Home</Link></li>
        <li><Link to="/about" style={{color: 'white'}}>About</Link></li>
      </ul>
    </nav>
    </HeaderContainer>
  </header>
);

export default Header;
