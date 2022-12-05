import logo from './logo.svg';
import './App.css';
import ContactRender from './Components/container/contact_render';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* REnderizado de la clase contacto desde contact_render.jsx*/}
        <ContactRender></ContactRender>
      </header>
    </div>
  );
}

export default App;
