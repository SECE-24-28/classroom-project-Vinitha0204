import { useState } from 'react';
import Home from './components/functionalComponents/Home';
import About from './components/functionalComponents/About';
import Contact from './components/functionalComponents/Contact';
import LearningReact from './components/functionalComponents/LearningReact';

const Link = ({ children, onClick, style }) => {
  return (
    <span onClick={onClick} style={style}>
      {children}
    </span>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState(null);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      case 'learning': return <LearningReact />;
      default: return null;
    }
  };

  return (
    <div>
      <nav style={{padding: '20px'}}>
        <ul style={{padding: 0}}>
          <li><Link onClick={() => setCurrentPage('home')} style={{textDecoration: 'underline', color: 'blue', display: 'block', padding: '10px 0', cursor: 'pointer'}}>Home</Link></li>
          <li><Link onClick={() => setCurrentPage('about')} style={{textDecoration: 'underline', color: 'blue', display: 'block', padding: '10px 0', cursor: 'pointer'}}>About</Link></li>
          <li><Link onClick={() => setCurrentPage('contact')} style={{textDecoration: 'underline', color: 'blue', display: 'block', padding: '10px 0', cursor: 'pointer'}}>Contact</Link></li>
          <li><Link onClick={() => setCurrentPage('learning')} style={{textDecoration: 'underline', color: 'blue', display: 'block', padding: '10px 0', cursor: 'pointer'}}>Learning React</Link></li>
        </ul>
      </nav>
      <div style={{padding: '20px'}}>
        {currentPage && renderPage()}
      </div>
    </div>
  );
}

export default App;
