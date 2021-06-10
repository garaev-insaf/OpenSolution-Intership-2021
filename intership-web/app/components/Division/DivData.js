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
import { Employee } from "../Employee/Employee";
import { delDivisions, putDivisions } from "../../Actions/MyActions";

const DivData = (props) => {
	let match = useRouteMatch();

	const dispatch = useDispatch();
	const realId = 0;
	const delId = null;
	const upId = null;
	const initialFormState = {
		id: null,
		id_organization: "",
		name: "",
		phone: "",
	};
	const [modalActive, setModalActive] = useState();
	const [div, setDiv] = useState(initialFormState);
	const [flag, setFlag] = useState();
	const handleInputChange = (event) => {
		const { name, value } = event.currentTarget;
		setDiv({ ...div, [name]: value });
	};
    const updateUser = (id) => {
		upId = id;
		setFlag(true);

		setDiv(props.div.find((divs) => divs.id == upId));

		setModalActive(true);
	};
	const deleteUser = (id) => {
		delId = id;
		setFlag(false);

		setDiv(props.div.find((divs) => divs.id == delId));

		setModalActive(true);
	};
	const handleSubmitUpDel = (event) => {
		event.preventDefault();
		if (!div.name || !div.phone || !div.id_organization) return;

		if (flag === true) {
			dispatch(putDivisions(div.id, div));
		} else {
			dispatch(delDivisions(div.id));
		}
		// обнуляем форму, с помощью setUser функции
		// которая у нас взята из хука в данном компоненте [1]
		setDiv(initialFormState);
	};
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>orgId</th>
						<th>name</th>
						<th>phone</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{
						(console.log("*****"),
						console.log(props.div.length),
						console.log("*****"),
						props.div.length > 0 ? (
							props.div.map((divis) => (
								<tr key={divis.id}>
									<td>{divis.id}</td>
									<td>{divis.id_organization}</td>
									<td>{divis.name}</td>
									<td>{divis.phone}</td>
									<td>
										<button className="button muted-button" onClick={() => updateUser(divis.id)}>
											Edit
										</button>
										<button
											className="button muted-button delete-btn"
											onClick={() => deleteUser(divis.id)}
										>
											Delete
										</button>
										<NavLink
											to={`${match.url}/${divis.id}`}
											className="button muted-button detail-btn"
										>
											Details
										</NavLink>
										<Modal active={modalActive} setActive={setModalActive}>
											<form className="orgForm" onSubmit={handleSubmitUpDel}>
												<div className="org-form-group">
													<label>name</label>
													<input
														type="text"
														name="name"
														value={div.name}
														onChange={handleInputChange}
													/>
												</div>
												<div className="org-form-group">
													<label>phone</label>
													<input
														type="number"
														name="phone"
														value={div.phone}
														onChange={handleInputChange}
													/>
												</div>

												<button className="button" onClick={() => setModalActive(false)}>Submit</button>
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
			<Router>
				<Switch>
					<Route path={`${match.path}/:empId`}>
						<Employee />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export { DivData };
