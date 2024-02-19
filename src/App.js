
import './App.css';
import About from './components/about';
import Header from './components/header';
import Hero from './components/hero';
import Project from './components/projects';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
     
      <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
