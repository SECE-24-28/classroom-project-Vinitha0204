import Navbar from './Components/functionalComponents/NavBar.jsx'
import "./CSS/App.css";
import ClassComponent from './Components/ClassComponents/ClassComponent.jsx';
function App() {
  const h1Style={backgroundColor:"violet",
    color:"white",
    textAlign:"center"
  }
  return (
    <header>
      <Navbar />
        <div>
          <h1 style={h1Style}>Welcome to MERN</h1>
          <h2 className="h2">This is simple react</h2>
          <ClassComponent />
          <img src="vite.svg" alt="" style={{marginLeft: "800px",height:"200px"}} />
        </div>
    </header>
  );
}
export default App