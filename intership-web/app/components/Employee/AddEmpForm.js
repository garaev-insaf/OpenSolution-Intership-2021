import * as React from "react";
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { postEmp } from "../../Actions/MyActions";
import "../../App/App.css";
import { Modal } from "../modal";

const AddEmpForm = (props) => {
    const dispatch = useDispatch();
    const initialFormState = {
        id_division: "",
        FIO: "",
        address: "",
        position: "",
    };
    // используем useState и передаем в качестве начального значения объект - initialFormState
    const [emp, setEmp] = useState(initialFormState);
    // const [modalActive, setModalActive] = useState();
    const handleInputChange = (event) => {
        const { name, value } = event.currentTarget;
        setEmp({ ...emp, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!emp.id_division || !emp.FIO || !emp.address || !emp.position) return;
        emp.id_division = parseInt(emp.id_division);
        dispatch(postEmp(emp));
        setEmp(initialFormState);
    };
    return (
        <form className="orgForm" onSubmit={handleSubmit}>
            <div className="org-form-group">
				<label>id_division</label>
				<input type="number" name="id_division" value={emp.id_division} onChange={handleInputChange} />
			</div>
            <div className="org-form-group">
                <label>FIO</label>
                <input
                    type="text"
                    name="FIO"
                    value={emp.FIO}
                    onChange={handleInputChange}
                />
            </div>
            <div className="org-form-group">
                <label>address</label>
                <input
                    type="text"
                    name="address"
                    value={emp.address}
                    onChange={handleInputChange}
                />
            </div>
            <div className="org-form-group">
                <label>position</label>
                <input
                    type="text"
                    name="position"
                    value={emp.position}
                    onChange={handleInputChange}
                />
            </div>

            <button className="button" onClick={() => props.setActive(false)}>Submit</button>
        </form>
    );
};

export { AddEmpForm };
