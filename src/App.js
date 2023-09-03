import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const links=["Home","Contact","About","LogIn"]
  return (
    <div className="App">
      <Navbar links={links}/>
      {/* <h1>Rest of the application</h1> */}
      <br/>
      <br/> 
      <br/> 
      <br/>  
      <Footer links={links}/>
    </div>
  );
}

export default App;
