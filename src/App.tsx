import { BrowserRouter, Router } from "react-router-dom";
import { BrandIcon } from "./components/brandIcon";
import { Button } from "./components/button";
import { Header } from "./components/header";
import Input from "./components/input";

function App() {
  return(
      <BrowserRouter>
        <div>
        {/* <Button/> */}
        {/* <BrandIcon/> */}
        <Header/>
        </div>
      </BrowserRouter>
  )
  
}

export default App;
