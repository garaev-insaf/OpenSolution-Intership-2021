import "../../App/App.css";
import * as React from "react";
import { useState, useEffect } from "react";
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

const DivData = (props) => {
	let match = useRouteMatch();
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
										<button className="button muted-button" onClick={() => props.setActive(true)}>
											Edit
										</button>
										<button
											className="button muted-button delete-btn"
											onClick={() => props.setActive(true)}
										>
											Delete
										</button>
										<NavLink
											to={`${match.url}/${divis.id}`}
											className="button muted-button detail-btn"
										>
											Details
										</NavLink>
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
