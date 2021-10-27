import {useState} from 'react'
import './App.css';
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {Routes} from './components/Routes'
 const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  return (

    

    <div className={darkTheme ? 'dark' : ''}>
      <div className = "bg-gray-100">
        <Navbar />
        <Footer />
        <Routes />
      </div>
    </div>
  );
}

export default App;
