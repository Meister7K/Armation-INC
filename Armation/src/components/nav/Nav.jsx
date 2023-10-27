import './Nav.scss'
import { Link } from 'react-router-dom'
import { Theme } from '../theme/Theme'

export const Nav = () => {

    return (<>
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'about'}>About</Link>
                </li>
                <li>
                    <Link to={'services'}>Services</Link>
                </li>
                <li>
                    <Theme />
                </li>
            </ul>

        </nav>
    </>)
}