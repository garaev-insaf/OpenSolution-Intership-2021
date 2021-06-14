import * as React from "react";
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import "../../App/App.css";
import { getOrgs, postOrgs, getOrgs } from "../../Actions/MyActions";

const AddOrgForm = (props) => {
	const dispatch = useDispatch();
	const initialFormState = { name: "", address: "", INN: "" };

	// используем useState и передаем в качестве начального значения объект - initialFormState
	const [org, setOrg] = useState(initialFormState);
	const handleInputChange = (event) => {
		const { name, value } = event.currentTarget;
		setOrg({ ...org, [name]: value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		if (!org.name || !org.address || !org.INN) return;
		org.INN = Number(org.INN);
		dispatch(postOrgs(org));
		// обнуляем форму, с помощью setUser функции
		// которая у нас взята из хука в данном компоненте [1]
		setOrg(initialFormState);
	};
	
	return (
		<form className="orgForm" onSubmit={handleSubmit}>
			<div className="org-form-group">
				<label>name</label>
				<input type="text" name="name" value={org.name} onChange={handleInputChange} />
			</div>
			<div className="org-form-group">
				<label>address</label>
				<input type="text" name="address" value={org.address} onChange={handleInputChange} />
			</div>
			<div className="org-form-group">
				<label>INN</label>
				<input type="number" name="INN" value={org.INN} onChange={handleInputChange} />
			</div>

			<button type="submit" className="button" onClick={() => props.setActive(false)}>
				Submit
			</button>
		</form>
	);
};

export { AddOrgForm };
