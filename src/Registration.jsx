import React from "react";

import './css/forms.css';
import FormInput from "./FormInput";
import FormSubmit from "./FormSubmit";

const Registration = (props) => {
    return (
        <>
            <div className="form-body">
                <div className="form-card">
                    <h1 className="title">Regisztráció</h1>
                    <div className="datas">
                        <FormInput type="text" title="Teljes Név" name="fullname" />
                        <FormInput type="text" title="OM azonosító" name="om" />
                        <FormInput type="password" title="Jelszó" name="pw" />
                        <FormInput type="password" title="Jelszó újra" name="pw2" />
                        <FormSubmit title="Regisztráció" onSubmit={props.onSubmit}/>
                        <label className="log-reg-change">Van már fiókod? <a href="/login">Jelentkezz be!</a></label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration;