import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import paleteSimpleColors from "./pages/PaleteSimpleColors"
import paleteCombi from "./pages/PaleteCombi"
import Ranking from "./pages/Ranking"
import profile from "./pages/Fav"
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";    // <== IMPORT
import AnonRoute from "./components/AnonRoute";        // <== IMPORT


function App() {
  return (
   
   <>
     <Navbar></Navbar> 

      <Switch>      
        <Route exact path="/" component={HomePage} />
        
        {/* 👇 UPDATE THE EXISTING ROUTES 👇  */}
        <Route exact path="/paleteSimpleColors" component={paleteSimpleColors} />
        <Route exact path="/paleteCombi" component={paleteCombi} />
        <Route exact path="/ranking" component={Ranking} />
        <PrivateRoute exact path="/fav"component={profile}/>
        <AnonRoute exact path="/signup" component={SignupPage} />
        <AnonRoute exact path="/login" component={LoginPage} />
      </Switch>
    </>
  );
}

export default App;
