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

        <button className='menu-btn' onClick={toggleActive}>Menu</button>
        <nav className={`nav ${active}`}>
            <div>
                <ul>
                    <li>
                        <Link to={'/'}><button onClick={toggleActive}>Home</button></Link>
                    </li>
                    <li>
                        <Link to={'about'}><button onClick={toggleActive}>About</button></Link>
                    </li>
                    <li>
                        <Link to={'services'}><button onClick={toggleActive}>Services</button></Link>
                    </li>
                    <li>
                        <Theme />
                    </li>
                    <li>
                        <button onClick={toggleActive}>X</button>
                    </li>
                </ul>
            </div>
        </nav>
    </>)
}