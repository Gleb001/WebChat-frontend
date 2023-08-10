// import =================================================== //
import { useState, createContext } from "react";
import { middlewareForms } from "./constants";
import "./index.scss";
import { resetPasswordType } from "./types";

// constants ================================================ //
const StatusContext = createContext<() => void>(() => { });

// main ===================================================== //
export const resetPassword: resetPasswordType = () => {

    let [numberStage, setNumberStage] = useState(1);
    let { description, MiddlewareForm } = middlewareForms[numberStage - 1];

    function incrementStage() {
        if (numberStage < middlewareForms.length) {
            setNumberStage(numberStage + 1);
        }
    }
    function decrementStage() {
        if (numberStage > 1) {
            setNumberStage(numberStage - 1);
        }
    }
    function handleClick() {
        decrementStage();
    }

    return (
        <div id="change-password-dialog-box" >
            <button className="button-show-prev-stage" onClick={handleClick}>{"<--"}</button>
            <div className="title">Забыли пароль?</div>
            <div className="description">{
                `Шаг ${numberStage}. ${description}`
            }</div>
            <StatusContext.Provider value={incrementStage}>
                <MiddlewareForm />
            </StatusContext.Provider>
        </div >
    );

};
export { StatusContext };