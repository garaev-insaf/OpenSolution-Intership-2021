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
import { OrgData } from "./OrgData.js";
import { AddOrgForm } from "./AddOrgForm";
import { NavBar } from "../NavBar";
import { Modal } from "../modal";
import { getOrgs } from "../../Actions/MyActions";

const Organization = () => {

	let match = useRouteMatch();

	const [appState, setAppState] = useState({
		id: null,
		name: "",
		address: "",
		INN: "",
	});

	const dispatch = useDispatch();
	const [modalActive, setModalActive] = useState();
	appState = useSelector((state) => state.org);
	console.log(appState);

	useEffect(() => {
		dispatch(getOrgs());
	}, [dispatch]);

	const addOrg = (organ) => {
		// создаем id значением на 1 больше (автоинкремент)
		organ.id = appState.length + 1;
		setAppState([...appState, organ]);
	};
	const routingId = (props) => {
		return props
	}
	return (
		<div className="Crud">
			<div className="NavBar">
				{/* добавляем таблицу: */}
				<NavBar setActive={setModalActive} />
			</div>
			<div className="OrgTable">
				{/* добавляем таблицу: */}
				<OrgData org={appState} setActive={setModalActive} chooseId={routingId}/>
			</div>
			<Modal active={modalActive} setActive={setModalActive}>
				<AddOrgForm addOrg={addOrg} />
			</Modal>
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
