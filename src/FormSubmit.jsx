import React from "react";

const FormSubmit = (props) => {
    return (
        <>
            <button className="submit" onClick={props.onSubmit}>{props.title}</button>
        </>
        )
}

export default FormSubmit;