                     
//import { AuthContext } from "../context/auth.context"; 

import "./scss/NavBar.scss";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  //const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <header class="site-header">
  <div class="wrapper site-header__wrapper">
    <a href="/" class="brand">Colored ID</a>
    <nav class="nav">
      <button class="nav__toggle" aria-expanded="false" type="button">
       
      </button>
      <ul class="nav__wrapper">
        <li class="nav__item"><a href="/PaleteSimpleColors">Palete Colors</a></li>
        <li class="nav__item"><a href="/PaleteCombi">Palete Gradients</a></li>
        <li class="nav__item"><a href="/login">Login</a></li>
        <li class="nav__item"><a href="/signup">Signup</a></li>
        <li class="nav__item"><a href="ranking">Ranking</a></li>
        
      </ul>
    </nav>
  </div>
</header>
  );
}

export default Navbar;

