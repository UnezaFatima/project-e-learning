import "./App.css";
import Navbar2 from './components/navbar/components/Nav2.jsx';
import Component1 from "./components/literature/components/Component1";
import Component2 from "./components/literature/components/Component2";
import Component3 from './components/literature/components/Component3'
import Footer from './components/footer/Footer.jsx';
import Login from './components/navbar/components/Login.jsx';
import Meeting from "./components/other_section/Meeting/Meeting";


function App(){
  return (
    <>
    
      <Navbar2 />
      <Component1/>
      <Component2 />
      <Component3 />
      <Footer/>
      <Login/>
      <Meeting />
      
          

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>E-Learning</h1> */}
  
    </>
  );
}

export default App;

//  Jo part comment hai osko kch mat kro...
