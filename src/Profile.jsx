import React from "react";

import logo from './assets/AccountLogo.jpg';

import './css/profile.css'

const Profile = () => {
    return (
        <>
            <main>
                <div className="profile-container">
                    <div className="profile-card">
                        <div className="identification">
                            <img src={logo} className="profile-picture" alt="Profile Picture" title="Profile Picture" />
                            <label>OM azonosító: 71658280861</label>
                        </div>
                        <div className="personal">
                            <h2>Név: Tóth Martin</h2>
                            <p>Születési Dátum: 2002.09.01</p>
                            <p>Intézmény neve: Lorem ipsum dolor sit, amet consectetur</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Profile;