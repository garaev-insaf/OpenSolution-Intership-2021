import * as React from "react";
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
	useRouteMatch,
	useParams,
	Redirect,
	useHistory
} from "react-router-dom";
import { IActionType } from "../common";
import Axios from "axios";
import "../../App/App.css";
import { onLogout } from "../../Actions/MyActions";

const OrgNavBar = (props) => {
	const dispatch = useDispatch();
	return (
		<div className="wrap navbar-wrap orgnavbar-wrap">
			<div className="content main">
				<button className="button nav-btn" onClick={() => props.setActive(true)}>
					Add
				</button>
				<NavLink to="/" className="button nav-btn" onClick={() => dispatch(onLogout())}>LogOut</NavLink>
			</div>
		</div>
	);
};

export { OrgNavBar };
