import "./Navbar.css";
import {AiOutlineClose,  AiOutlineMenu} from "react-icons/ai";

const Navbar = () =>{
    return(
        <>
        <body>
     <header>
        <a href="#" className="logo">Logo</a>

         <input type="checkbox" id="menu-bar"/>
         <label For="menu-bar"><AiOutlineMenu/></label>
        <nav className="navbar">
        <label For="menu-bar" className="close-menu"><AiOutlineClose/></label>
        <ul>
               <li><a href="#">Home</a></li> 
               <li><a href="#">About</a></li>
               <li><a href="#">Pages <span> ⌄</span></a>
            <ul>
                <li><a href="#">blogs</a></li>
                <li><a href="#">sevices <span> ⌄</span></a>
                <ul>
                    <li><a href="#">html</a></li>
                    <li><a href="#">css</a></li>
                    <li><a href="#">javascript</a></li>
                 </ul>
                </li>
                 
            
             </ul>
           </li>
            
            <li><a href="#">Review</a></li>
            <li><a href="#">Gallery <span> ⌄</span></a>
              <ul>
                <li><a href="#">Grid Gallery</a></li>
                <li><a href="#">Flex Gallery</a></li>
            </ul>
            </li>
            
            <li><a href="#">Connect</a></li>
            </ul>
        </nav>

       </header>
     </body>
      
        </>
    )
};

export default Navbar;