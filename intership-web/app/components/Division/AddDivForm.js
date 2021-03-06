import * as React from "react";
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { postDivisions } from "../../Actions/MyActions";
import "../../App/App.css";

const AddDivForm = (props) => {
	const dispatch = useDispatch();
	const initialFormState = {
		id_organization: "",
		name: "",
		phone: "",
	};
	// используем useState и передаем в качестве начального значения объект - initialFormState
	const [div, setDiv] = useState(initialFormState);
	const [modalActive, setModalActive] = useState();
	const handleInputChange = (event) => {
		const { name, value } = event.currentTarget;
		setDiv({ ...div, [name]: value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		if (!div.name || !div.phone) return;
        dispatch(postDivisions(div));
		setDiv(initialFormState);
	};
	return (
		<form className="orgForm" onSubmit={handleSubmit}>
			{/* <div className="org-form-group">
				<label>id</label>
				<input type="text" name="id" value={org.id} onChange={handleInputChange} />
			</div> */}
			<div className="org-form-group">
				<label>id_organization</label>
				<input type="number" name="id_organization" value={div.id_organization} onChange={handleInputChange} />
			</div>
			<div className="org-form-group">
				<label>name</label>
				<input type="text" name="name" value={div.name} onChange={handleInputChange} />
			</div>
			<div className="org-form-group">
				<label>phone</label>
				<input type="number" name="phone" value={div.phone} onChange={handleInputChange} />
			</div>

			<button className="button" onClick={() => props.setActive(false)}>Submit</button>
		</form>
	);
};

export { AddDivForm };
