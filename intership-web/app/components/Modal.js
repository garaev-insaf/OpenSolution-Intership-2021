import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IActionType } from ".././common";
import { Actions } from "../Actions/Actions";
import { IStoreState } from "../Reducers/Reducers";
import "../components/styles/css/modal.css";
import { propTypes } from "react-bootstrap/esm/Image";

const Modal = ({active, setActive, children}) =>
{
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>

            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>

        </div> 
    )
}
	

export { Modal };
