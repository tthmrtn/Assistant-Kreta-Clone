import React from "react";
import FormSubmit from "./FormSubmit";

const Main = (props) => {
    return (
        <>
            <main>
                <h1>Main Page!</h1>
                <FormSubmit onSubmit={props.onSubmit} title="Kilépés"/>
            </main>
        </>
    )
}

export default Main;