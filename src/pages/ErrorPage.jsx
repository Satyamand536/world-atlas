import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <>
        <h1>Are Yaar isme to error AA GYA.</h1>
        {error && <p>{error.data}</p>}
        <NavLink to="/"><button>Go to Home</button></NavLink>
        </>
    )
}