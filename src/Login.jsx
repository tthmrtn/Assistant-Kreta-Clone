import React from "react";

import './css/forms.css';
import FormInput from "./FormInput";
import FormSubmit from "./FormSubmit";

const Login = (props) => {
    return (
        <>
            <div className="form-body">
                <div className="form-card">
                    <h1 className="title">Bejelentkezés</h1>
                    <div className="datas">
                        <FormInput type="text" title="OM azonosító" name="om" />
                        <FormInput type="password" title="Jelszó" name="pw" />
                        <FormSubmit title="Bejelentkezés" onSubmit={props.onSubmit}/>
                        <label className="log-reg-change">Nincs még fiókod? <a href="/registration">Csinálj egyet!</a></label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;