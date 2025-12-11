import Props from "./Props";
import State from "./State";
import Home from "./Home";

function Navbar() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Learning React</li>
          </ul>
        </nav>
        
        <div>
          <Home />
          <ol>
            <li><Props hi="Welcome to Props" grade="12" age="17" img="/vite.svg"/></li>
            <li><State /></li>
          </ol>
        </div>
      </div>
    </>
  )
}
export default Navbar;