import React from "react";

const NavigationButton = (props) => {
    return (
        <>
            <li className="NavButton"><a href={props.direction}>{props.text || props.children}</a></li>
        </>
    )
}

export default NavigationButton;