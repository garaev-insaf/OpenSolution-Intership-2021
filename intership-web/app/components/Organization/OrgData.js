import "../../App/App.css";
import * as React from "react";
import { useState, useEffect } from "react";

const OrgData = (props) => {
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
						console.log('*****'),console.log(props.org.length),
						console.log('*****'),
						props.org.length > 0 ? (
						props.org.map((organ) => (
							<tr key={organ.id}>
								<td>{organ.id}</td>
								<td>{organ.name}</td>
								<td>{organ.address}</td>
								<td>{organ.INN}</td>
								<td>
									<button className="button muted-button">Edit</button>
									<button className="button muted-button">Delete</button>
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
		</div>
	);
};

export { OrgData };
