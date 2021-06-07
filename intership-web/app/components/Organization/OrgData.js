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
import { createBrowserHistory } from "history";
import { Division } from "../Division/Division";

const OrgData = (props) => {
	let match = useRouteMatch();
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
					{
						(console.log("*****"),
						console.log(props.org.length),
						console.log("*****"),
						props.org.length > 0 ? (
							props.org.map((organ) => (
								<tr key={organ.id}>
									<td>{organ.id}</td>
									<td>{organ.name}</td>
									<td>{organ.address}</td>
									<td>{organ.INN}</td>
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
											to={`/organization/${organ.id}`}
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
					<Route path={`/organization/division/:id`}>
						<Division />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export { OrgData };
