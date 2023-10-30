import aboutImg from '../../assets/eng1.jpg'
import './About.scss'
import { useEffect } from 'react'

export const About =()=>{

    useEffect(() => {
        window.scrollTo({
               top: 0,
               left: 0,
             });
     }, [])

    return(<div className='page'>
    <h2>About Our Company</h2>
    <img src={aboutImg} className='home-img'/>
    <p>
    Armation Inc. started in 2019 with the goal to leverage our 25+ years of combined industrial automation experience and creativity to assist our customers with the development of automated systems and solutions for complex manufacturing problems. We strive to provide solid designs, high quality craftsmanship, and on-time deliveries to our customers. Our service and commitment to the success of a project doesn’t end when a system leaves our door because we stand by our products and will assist our customers in any way we can to reduce downtime and resolve any issues that arise post shipment. We look forward to challenging ourselves on your next project!
    </p>

    </div>)
}