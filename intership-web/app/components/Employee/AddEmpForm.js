import * as React from "react";
import { useState, useEffect } from "react";
import "../../App/App.css";

const AddEmpForm = (props) => {
    const initialFormState = {
        id: null,
        id_division: "",
        FIO: "",
        address: "",
        position: "",
    };
    // используем useState и передаем в качестве начального значения объект - initialFormState
    const [emp, setEmp] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.currentTarget;
        setDiv({ ...div, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!div.name || !div.phone) return;

        // вызываем addUser из хука из App
        props.addDiv(div);
        // обнуляем форму, с помощью setUser функции
        // которая у нас взята из хука в данном компоненте [1]
        setDiv(initialFormState);
    };
    return (
        <form className="orgForm" onSubmit={handleSubmit}>
            {/* <div className="org-form-group">
				<label>id</label>
				<input type="text" name="id" value={org.id} onChange={handleInputChange} />
			</div> */}
            {/* <div className="org-form-group">
				<label>id_division</label>
				<input type="text" name="name" value={emp.id_division} onChange={handleInputChange} />
			</div> */}
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
                    type="number"
                    name="address"
                    value={emp.address}
                    onChange={handleInputChange}
                />
            </div>
            <div className="org-form-group">
                <label>position</label>
                <input
                    type="number"
                    name="position"
                    value={emp.position}
                    onChange={handleInputChange}
                />
            </div>

            <button className="button">Submit</button>
        </form>
    );
};

export { AddEmpForm };
