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
import { Actions } from "../Actions/Actions.js";
import { IStoreState } from "../Reducers/Reducers";
import Axios from "axios";
import "../App/App.css";
import { Modal } from "../components/modal";
import { onLogout } from "../Actions/MyActions";
import { goBack } from "connected-react-router";
import {history} from "../Store/Store"

const NavBar = (props) => {
	const dispatch = useDispatch();
	return (
		<div className="wrap navbar-wrap">
			<div className="content">
				<button className="button nav-btn" onClick={() => history.goBack()}>Back</button>
				<button className="button nav-btn" onClick={() => props.setActive(true)}>
					Add
				</button>
				<NavLink to="/" className="button nav-btn" onClick={() => dispatch(onLogout())}>LogOut</NavLink>
			</div>
		</div>
	);
};

export { NavBar };
