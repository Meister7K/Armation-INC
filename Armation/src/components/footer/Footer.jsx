
import './Footer.scss'

export const Footer = () => {

    return (<>
        <div className='footer'>
            
            <div className='contact'>
                <h2>Contact</h2>
                <h4>Phone</h4>
                <p>763-717-8277</p>
                <h4>Email</h4>
                <p>General Inquiries-A/P</p>
                <a href='mailto:Office@armationinc.com' target='_blank' rel="noreferrer"><email>Office@armationinc.com</email></a> 
                <p>Riley Vollkommer - President</p>
                <a href='mailto:Riley@armationinc.com' target='_blank' rel="noreferrer"><email>Riley@armationinc.com</email></a> 
                <p>Andy Brookman - Vice President</p>
                <a href='mailto:Andy@armationinc.com' target='_blank' rel="noreferrer"><email>Andy@armationinc.com</email></a> 
            </div>
            <div className='location'>
                <h3>Location</h3>
                <address>6620 Jefferson Hwy Osseo, MN 55369</address>
                <h4>Hours of Operation</h4>
                <ul className='hours'>
                    <li>
                        Monday-Thursday: <time>08:00-17:00</time>
                    </li>
                    <li>
                        Friday: <time>08:00-12:00</time>
                    </li>
                    <li>
                        Saturday & Sunday: Closed
                    </li>
                </ul>
                <time></time>
            </div>


        </div>
    </>)
}