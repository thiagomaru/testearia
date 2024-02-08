import React from 'react';
import deflogo from '../assets/def.png'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from './styles';
import Header from '../components/main/Header';
import MainContent from '../components/main/MainContent';
import Footer from '../components/main/Footer';
import Home from './Home';
import About from './About';

const App = () => (
  <Router>
    <img src={deflogo} width={90} height={90} alt='logo defensoria' aria-hidden="true" />
    <Header />
    <Container>  
      <MainContent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Container>
  </Router>
);

export default App;
