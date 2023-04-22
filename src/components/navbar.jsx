
import Signup from "./signup";
import Login from "./login";
import Cookies from "js-cookie";

import CreatePost from "./CreatePost";

function Navbar({ isLoggedIn }) {

  const LogOut = () => {
    Cookies.remove('token')
    window.location.reload()
  }

  return (
    <nav>
      <div className="login"><Login /></div>
      <div className="logo">
        <p><h2>𝕁𝕠𝕓𝕚𝕗𝕪</h2></p>
      </div>
      
      {
        !isLoggedIn ? 
        <div className="login">
        <Signup />
        
      </div>
      :  <div className="login">
        <CreatePost />
        <button onClick={LogOut}>Log Out</button>
      </div>
      }
      
    </nav>
  );
}

export default Navbar;
