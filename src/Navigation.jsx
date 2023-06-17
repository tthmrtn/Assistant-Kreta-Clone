import React from "react";

import './css/nav.css';
import NavigationButton from "./NavigationButton";

const Navigation = () => {
    return (
        <>
            <nav>
                <ul className="NavList">
                    <NavigationButton text="Főoldal" direction="/" />
                    <NavigationButton text="Beállítások" direction="/settings" />
                    <NavigationButton text="Jegyeim" direction="/grades" />
                    <NavigationButton text="Házifeladatok" direction="/homework" />
                    <NavigationButton text="Profil" direction="/profil" />
                </ul>
            </nav>
        </>
    )
}

export default Navigation;