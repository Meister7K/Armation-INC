import './Nav.scss'
import { Link } from 'react-router-dom'
import { Theme } from '../theme/Theme'
import { useState } from 'react'

export const Nav = () => {

    const [active, setActive] = useState('hidden');

    const toggleActive = () => {

        if (active === 'hidden') {
            setActive('visible');
            document.body.style.overflow = 'hidden';
        } else {
            setActive('hidden');
            document.body.style.overflow ='visible'
        }
    }




    return (<>

        <button className={`menu-btn ${active === 'visible'?'hidden':'visible'}`} onClick={toggleActive}>Menu</button>
        <nav className={`nav ${active} `}>
           
                <ul>
                    <li>
                        <Link to={'/'}><button className='link-btn' onClick={toggleActive}>Home</button></Link>
                    </li>
                    <li>
                        <Link to={'about'}><button className='link-btn' onClick={toggleActive}>About</button></Link>
                    </li>
                    <li>
                        <Link to={'services'}><button className='link-btn' onClick={toggleActive}>Services</button></Link>
                    </li>
                    <li>
                        <Theme />
                    </li>
                    <li>
                        <button className='link-btn' id='x' onClick={toggleActive}>X</button>
                    </li>
                </ul>
            
        </nav>
    </>)
}