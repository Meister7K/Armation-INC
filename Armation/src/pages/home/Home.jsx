
import homeImg from '../../assets/eng.jpg'
import './Home.scss'
import { useEffect } from 'react'

export const Home =()=>{

    
    useEffect(() => {
        window.scrollTo({
               top: 0,
               left: 0,
             });
     }, [])


    return(<div className='page'>
    <h2>Automation Solutions Simplified</h2>
    <h4><em>We challenge ourselves to do it right the first time</em></h4>
    {/* <br/> */}
    <p>
    Armation Inc. provides custom solutions for your automation needs. From simple tools and test equipment to full turn-key systems. We strive to supply innovative solutions, high level craftsmanship and an unparalleled level of flexibility for your project.
    </p>
    <img src={homeImg} className='home-img'/>
    </div>)
}