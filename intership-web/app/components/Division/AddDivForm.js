import * as React from "react";
import { useState, useEffect } from "react";
import "../../App/App.css";


const AddDivForm = props => {
	const initialFormState = { id: null, id_organization: "", name: "", phone: '' };
	// используем useState и передаем в качестве начального значения объект - initialFormState
	const [div, setDiv] = useState(initialFormState);

	const handleInputChange = (event) => {
		const { name, value } = event.currentTarget;
		setDiv({ ...div, [name]: value });
	};
	const handleSubmit = event => {
		event.preventDefault()
		if (!div.name || !div.phone) return
	
		// вызываем addUser из хука из App
		props.addDiv(div)
		// обнуляем форму, с помощью setUser функции
		// которая у нас взята из хука в данном компоненте [1]
		setDiv(initialFormState)
	  }
	return (
		<form className="orgForm" onSubmit={handleSubmit}>
			{/* <div className="org-form-group">
				<label>id</label>
				<input type="text" name="id" value={org.id} onChange={handleInputChange} />
			</div> */}
			{/* <div className="org-form-group">
				<label>id_organization</label>
				<input type="text" name="id_organization" value={div.id_organization} onChange={handleInputChange} />
			</div> */}
			<div className="org-form-group">
				<label>name</label>
				<input type="text" name="name" value={div.name} onChange={handleInputChange} />
			</div>
			<div className="org-form-group">
				<label>phone</label>
				<input type="number" name="phone" value={div.phone} onChange={handleInputChange} />
			</div>

			<button className="button">Submit</button>
		</form>
	)
}

export { AddDivForm }
