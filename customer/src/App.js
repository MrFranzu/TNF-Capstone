import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Hero from './Components/Hero/Hero';
import BookingForm from './Components/BookingForm/BookingForm';
import Contact from './Components/Contact/Contact';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <Home />
          </>
        );
      case 'about':
        return <About />;
      case 'booking':
        return (
          <>
            <BookingForm />
          </>
        );
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Header 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage} 
        toggleNav={toggleNav} 
        isNavOpen={isNavOpen} 
      />
      <main>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
