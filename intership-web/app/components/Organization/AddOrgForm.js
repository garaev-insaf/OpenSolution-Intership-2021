import * as React from "react";
import { useState, useEffect } from "react";
import "../../App/App.css";

const AddOrgForm = props => {
	const initialFormState = { id: null, name: "", address: "", INN: '' };
	// используем useState и передаем в качестве начального значения объект - initialFormState
	const [org, setOrg] = useState(initialFormState);

	const handleInputChange = (event) => {
		const { name, value } = event.currentTarget;
		setOrg({ ...org, [name]: value });
	};
	const handleSubmit = event => {
		event.preventDefault()
		if (!org.name || !org.address || !org.INN) return
	
		// вызываем addUser из хука из App
		props.addOrg(org)
		// обнуляем форму, с помощью setUser функции
		// которая у нас взята из хука в данном компоненте [1]
		setOrg(initialFormState)
	  }
	return (
		<form className="orgForm" onSubmit={handleSubmit}>
			{/* <div className="org-form-group">
				<label>id</label>
				<input type="text" name="id" value={org.id} onChange={handleInputChange} />
			</div> */}
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

			<button className="button">Add</button>
		</form>
	)
}

export { AddOrgForm }
