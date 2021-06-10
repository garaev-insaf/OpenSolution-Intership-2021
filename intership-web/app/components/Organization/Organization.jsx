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
import { Actions } from "../../Actions/Actions.js";
import { IStoreState } from "../Reducers/Reducers";
import Axios from "axios";
import "../../App/App.css";
// import OnLoadingOrgData from "./OnLoadingOrgData.js";
import { OrgData } from "./OrgData";
import { AddOrgForm } from "./AddOrgForm";
import { OrgNavBar } from "./OrgNavBar";
import { Modal } from "../modal";
import { getOrgs } from "../../Actions/MyActions";

const Organization = () => {

	let match = useRouteMatch();
	const nowId = 0;

	const [appState, setAppState] = useState({
		id: null,
		name: "",
		address: "",
		INN: "",
	});

	const dispatch = useDispatch();
	const [modalActive, setModalActive] = useState();
	appState = useSelector((state) => state.org);
	localStorage.setItem("Orgid", Number(appState.length))
	useEffect(() => {
		dispatch(getOrgs());
	}, [dispatch]);

	return (
		<div className="Crud">
			<div className="NavBar">
				{/* добавляем таблицу: */}
				<OrgNavBar setActive={setModalActive} />
			</div>
			<div className="main-wrap">
			<div className="OrgTable">
				{/* добавляем таблицу: */}
				<OrgData org={appState}/>
			</div>
			<Modal active={modalActive} setActive={setModalActive}>
				<AddOrgForm setActive={setModalActive}/>
			</Modal>
			</div>
		</div>
	);
};
export { Organization };
{
	/* <NavLink to="/division">
				<h2>Organization</h2>
			</NavLink> */
}
{
	{
		/* <div className="OrgForm">
				<h2>Add organization</h2>

				<AddOrgForm addOrg={ addOrg }/>
			</div>
			<div className="OrgForm">
				<button onClick={}></button>
			</div> */
	}
}
