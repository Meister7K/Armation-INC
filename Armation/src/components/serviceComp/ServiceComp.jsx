
export const ServiceComp = (props) =>{

    return(<>
    <h1 className="serv-title">{props.title}</h1>
    <img className="serv-img" src={props.img}/>
    <p className="serv-desc">{props.desc}</p>
    
    </>)
}