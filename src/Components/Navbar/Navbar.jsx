import Expired from "./Expired";
import Home from "./Home";
import Mylibrary from "./Mylibrabry";
import Search from "./Search";
import Settings from "./Settings";


function Navbar() {
    return (
        <div classname = "navbar">
           <Home />
           <Search />
           <Mylibrary />
           <Settings />
           <Expired />

 
        </div>
    );
}
 export default Navbar;