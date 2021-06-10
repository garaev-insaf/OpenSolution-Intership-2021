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
import { createBrowserHistory } from "history";
import { Division } from "../Division/Division";
import { Modal } from "../modal";
import { delOrgs, putOrgs } from "../../Actions/MyActions";

const OrgData = (props) => {
	let match = useRouteMatch();
	const dispatch = useDispatch();
	const realId = 0;
	const delId = null;
	const upId = null;
	const initialFormState = { id: null, name: "", address: "", INN: "" };

	const [modalActive, setModalActive] = useState();
	const [org, setOrg] = useState(initialFormState);
	const [flag, setFlag] = useState();
	// если флаг 'true' значит будем менять список, если false удалять
	const handleInputChange = (event) => {
		const { name, value } = event.currentTarget;
		setOrg({ ...org, [name]: value });
	};
	const updateUser = (id) => {
		upId = id;
		setFlag(true);

		setOrg(props.org.find((orgs) => orgs.id == upId));

		setModalActive(true);
	};
	const deleteUser = (id) => {
		delId = id;
		setFlag(false);

		setOrg(props.org.find((orgs) => orgs.id == delId));

		setModalActive(true);
	};
	const handleSubmitUpDel = (event) => {
		event.preventDefault();
		if (!org.name || !org.address || !org.INN) return;

		if (flag === true) {
			dispatch(putOrgs(org.id, org));
		} else {
			dispatch(delOrgs(org.id));
		}
		// обнуляем форму, с помощью setUser функции
		// которая у нас взята из хука в данном компоненте [1]
		setOrg(initialFormState);
	};
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>name</th>
						<th>address</th>
						<th>INN</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{props.org.length > 0 ? (
						props.org.map((organ) => (
							<tr key={organ.id}>
								<td>{organ.id}</td>
								<td>{organ.name}</td>
								<td>{organ.address}</td>
								<td>{organ.INN}</td>
								<td>
									<button className="button muted-button" onClick={() => updateUser(organ.id)}>
										Edit
									</button>
									<button
										className="button muted-button delete-btn"
										onClick={() => deleteUser(organ.id)}
									>
										Delete
									</button>
									<NavLink
										to={`/organization/${organ.id}`}
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
													value={org.name}
													onChange={handleInputChange}
												/>
											</div>
											<div className="org-form-group">
												<label>address</label>
												<input
													type="text"
													name="address"
													value={org.address}
													onChange={handleInputChange}
												/>
											</div>
											<div className="org-form-group">
												<label>INN</label>
												<input
													type="number"
													name="INN"
													value={org.INN}
													onChange={handleInputChange}
												/>
											</div>

											<button
												type="submit"
												className="button"
												onClick={() => setModalActive(false)}
											>
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
					)}
				</tbody>
			</table>
			<Router>
				<Switch>
					<Route path={`/organization/division/:id`}>
						<Division />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export { OrgData };
