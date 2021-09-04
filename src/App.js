import logo from './logo.svg';
import './App.css';
import{ Header} from './components/Header'
import {HeroSection} from './components/HeroSection'
import Main from './components/Main';
import {Footer} from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Main />
      
  
      <Footer />
     
    </div>
  );
}

export default App;
