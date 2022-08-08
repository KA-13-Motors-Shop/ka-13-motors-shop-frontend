import { Router } from "react-router-dom";
import { BrandIcon } from "./components/brandIcon";
import { Button } from "./components/button";
import { Header } from "./components/header";
import Input from "./components/input";

function App() {
  return(
    <Router>
      <div>
        {/* <Button/> */}
        {/* <BrandIcon/> */}
        <Header/>
      </div>

    </Router>

  )
  
}

export default App;
