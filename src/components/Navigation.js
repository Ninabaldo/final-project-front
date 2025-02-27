
import "./scss/NavBar.scss";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import { useHistory } from "react-router-dom"

function Navbar() {
    // Subscribe to the AuthContext to gain access to
    // the values from AuthContext.Provider `value` prop

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
    const history = useHistory();
  
    return (
<header class="header" role="banner" aria-label="The Top">
  <div class="header__wrapper">
   
    <nav class="[ nav ] [ flow ]" aria-role="navigation">
      <ul class="nav__list" role="list">
      
     
      
        <li class="titleLogo"><a href="/">COLORED ID</a></li>
        <li class="nav__item"><a href="/paleteSimpleColors">Palete Colors</a></li>
        <li class="nav__item"><a href="paleteCombi">Palete Combi</a></li>
        <li class="nav__item"><a href="/ranking">Ranking</a></li>

        {isLoggedIn ?
        <>
          <li class="nav__item"><a onClick={()=>{logOutUser()}}>Logout</a></li>
          <li class="nav__item"><a onClick={()=>{history.push("/fav")}}>Profile</a></li>
          </>
        :
        
          <>
        <li class="nav__item"><a href="signup">Signup</a></li>
        <li class="nav__item"><a href="/login">Login</a></li>
          </>
        
        }
        
        
      </ul>
    </nav>
  </div>


  



</header>

);
}

export default Navbar;