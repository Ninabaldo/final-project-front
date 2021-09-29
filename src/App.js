import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import paleteSimpleColors from "./pages/paleteSimpleColors"
import paleteCombi from "./pages/paleteCombi"
import Ranking from "./pages/Ranking"

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";    // <== IMPORT
import AnonRoute from "./components/AnonRoute";        // <== IMPORT


function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>      
        <Route exact path="/" component={HomePage} />
        
        {/* 👇 UPDATE THE EXISTING ROUTES 👇  */}
        <PrivateRoute exact path="/paleteSimpleColors" component={paleteSimpleColors} />
        <PrivateRoute exact path="/paleteCombi" component={paleteCombi} />
        <PrivateRoute exact path="/ranking" component={Ranking} />
        
        <AnonRoute exact path="/signup" component={SignupPage} />
        <AnonRoute exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
