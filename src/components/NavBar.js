import login from "../pages/LoginPage"
import signup from "../pages/SignupPage"
import ranking from "../pages/Ranking"
import paleteColors from "../pages/PaleteSimpleColors"
import paleteCombi from "../pages/PaleteCombi"
import "./scss/NavBar.scss";
import { NavbarBrand } from "react-bootstrap"
function Navbar() {
    // Subscribe to the AuthContext to gain access to
    // the values from AuthContext.Provider `value` prop
    //const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  
    return (
<header class="header" role="banner" aria-label="The Top">
  <div class="header__wrapper">
    <h1 class="header__logo">Colored ID</h1>
    <nav class="[ nav ] [ flow ]" aria-role="navigation">
      <ul class="nav__list" role="list">
        
        <li class="nav__item"><a href="/paleteSimpleColors">Palete Colors</a></li>
        <li class="nav__item"><a href="paleteCombi">Palete Combi</a></li>
        <li class="nav__item"><a href="/ranking">Ranking</a></li>
        <li class="nav__item"><a href="signup">Signup</a></li>
        <li class="nav__item"><a href="/login">Login</a></li>
      </ul>
    </nav>
  </div>
</header>

);
}

export default Navbar;