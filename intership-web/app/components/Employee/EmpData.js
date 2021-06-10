import "../../App/App.css";
import * as React from "react";
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Modal } from "../modal";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
	useRouteMatch,
	useParams,
	Redirect,
	useHistory,
} from "react-router-dom";
import { delEmp, putEmp } from "../../Actions/MyActions";

const EmpData = (props) => {
	let match = useRouteMatch();

	const dispatch = useDispatch();
	const realId = 0;
	const delId = null;
	const upId = null;
	const initialFormState = {
		id: null,
		id_division: "",
		FIO: "",
		address: "",
		position: "",
	};
	const [modalActive, setModalActive] = useState();
	const [emp, setEmp] = useState(initialFormState);
	const [flag, setFlag] = useState();
	const handleInputChange = (event) => {
		const { name, value } = event.currentTarget;
		setEmp({ ...emp, [name]: value });
	};
	const updateUser = (id) => {
		upId = id;
		setFlag(true);

		setEmp(props.emp.find((emps) => emps.id == upId));
		console.log("в теории я октрываю модальное окно");
		
		setModalActive(true);
	};
	const deleteUser = (id) => {
		delId = id;
		setFlag(false);

		setEmp(props.emp.find((emps) => emps.id == delId));

		setModalActive(true);
	};
	const handleSubmitUpDel = (event) => {
		event.preventDefault();
		if (!emp.id_division || !emp.FIO || !emp.address || !emp.position) return;

		if (flag === true) {
			dispatch(putEmp(emp.id, emp));
		} else {
			dispatch(delEmp(emp.id));
		}

		setEmp(initialFormState);
	};
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>id_division</th>
						<th>FIO</th>
						<th>address</th>
						<th>position</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{
						(console.log("*****"),
						console.log(props.emp.length),
						console.log("*****"),
						props.emp.length > 0 ? (
							props.emp.map((empl) => (
								<tr key={empl.id}>
									<td>{empl.id}</td>
									<td>{empl.id_division}</td>
									<td>{empl.FIO}</td>
									<td>{empl.address}</td>
									<td>{empl.position}</td>
									<td>
										<button className="button muted-button" onClick={() => updateUser(empl.id)}>
											Edit
										</button>
										<button
											className="button muted-button delete-btn"
											onClick={() => deleteUser(empl.id)}
										>
											Delete
										</button>
										<Modal active={modalActive} setActive={setModalActive}>
											<form className="orgForm" onSubmit={handleSubmitUpDel}>
												<div className="org-form-group">
													<label>id_division</label>
													<input
														type="text"
														name="id_division"
														value={emp.id_division}
														onChange={handleInputChange}
													/>
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

												<button className="button"  onClick={() => setModalActive(false)}>
													Submit
												</button>
											</form>
										</Modal>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan={3}>No users</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	);
};

export { EmpData };
