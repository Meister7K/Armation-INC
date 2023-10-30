import { useRouteError } from "react-router-dom";
import { useEffect } from "react";

import './Error.scss'

export const Error =() =>{

    useEffect(() => {
        window.scrollTo({
               top: 0,
               left: 0,
             });
     }, [])

    const error = useRouteError();
    console.error(error);

    return(<div className="page">
    <h1>Ope!</h1>
    <h2>{error.status + ' ' + (error.statusText|| error.message)}</h2>
    <p>
        <i>{error.data}</i>
    </p>
    </div>)
}