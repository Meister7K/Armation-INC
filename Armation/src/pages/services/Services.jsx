import { ServiceComp } from '../../components/serviceComp/ServiceComp'
import './Services.scss'

export const Services =()=>{

    return(<>
    {/* <h2>Services</h2> */}
    <ServiceComp title='Design Services' img='placeholder200x200' 
    
    desc={`Armation Inc. provides both mechanical design services as well as electrical design services. Our team has spent their careers in the automation industry and are able to provide creative solutions for your project needs. From small tools for operator assistance to full scale turn key systems, we can do it all. 
    \r\n
    We use SolidWorks® Cad design software and have the ability to tailor our designs and drawings to your specific standards.
    \r\n
    For electrical design and programming we utilize AutoCAD® Electrical and Rockwell Automation® products.`}
    />

    <ServiceComp title='Build/Assembly Services' img={`placeholder200x200`} desc={`Do you need a system built but are short on bandwidth? Armation Inc. provides build to print solutions to help you out. Along with our full design services, we also will build your automated equipment. Send us your drawing package and we will complete your system from manufacturing to power up and everything in between.`}/>
    </>)
}