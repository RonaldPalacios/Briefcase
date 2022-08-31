import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [click, setClick] = useState(false);
  const handleclick = () => setClick(!click);

  return (
    <>
        <nav className='navbar'>
            <div className= 'navbar-conteiner'>
              <Link to='/'className='navbar-logo'>
                Ronald Palacios <i className='fab fab-typo3' />
              </Link>
              <div className='menu-icon' onClick={handleclick}>
                <i className={click ? 'fas fa-time' : 'fas fa-bars'} />
              </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar;