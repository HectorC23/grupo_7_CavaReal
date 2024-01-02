import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'

function Navbar(){
    return(
        <nav class="navbar topbar shadow nav-color">

            <ul class="nav justify-content-start align-items-center">
              
              <li class="nav-item">
                <Link class="nav-link" to="/" >
                <img class="image" src={Logo} alt="Logo"/> 
                  <p id="title-footer">CAVA REAL</p>
                </Link>
              </li>

            </ul>

        </nav>
    )
}

export default Navbar;