import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Homescreens from "./screens/Homescreens";
import Productdescription from './screens/Productdescription';
import Cartscreen from "./screens/Cartscreen"
import Registerscreen from "./screens/Registerscreen"
import Loginscreen from "./screens/Loginscreen"
import Adminscreen from "./screens/Adminscreen"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Homescreens} />
        <Route exact path="/product/:id" component={Productdescription} />
        <Route exact path="/cart" component={Cartscreen} />
        <Route exact path="/register" component={Registerscreen} />
        <Route exact path="/login" component={Loginscreen} />
        <Route exact path="/admin" component={Adminscreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
