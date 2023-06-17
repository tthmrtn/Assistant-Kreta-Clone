import React from "react";

const FormInput = (props) => {
    return (
        <>
            <div className="input">
                <label className="input-title">{props.title}</label>
                <input className="input-field" type={props.type} name={props.name} id={props.name} />
            </div>
        </>
    )
}

export default FormInput;