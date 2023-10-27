import { useRouteError } from "react-router-dom";

import './Error.scss'

export const Error =() =>{

    const error = useRouteError();
    console.error(error);

    return(<>
    <h1>Ope!</h1>
    <h2>{error.status + ' ' + (error.statusText|| error.message)}</h2>
    <p>
        <i>{error.data}</i>
    </p>
    </>)
}