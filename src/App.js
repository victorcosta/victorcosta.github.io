import React from 'react';
import Header from './Sections/Header';

import GlobalStyle from './styles/global';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
      <GlobalStyle />
    </>
  );
}

export default App;
