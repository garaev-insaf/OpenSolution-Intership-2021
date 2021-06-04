import * as React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { IActionType } from "../common";
import { Actions } from "../../Actions/Actions.js";
import { IStoreState } from "../Reducers/Reducers";
import Axios from "axios";
import "../../App/App.css";
// import OnLoadingOrgData from "./OnLoadingOrgData.js";
import { OrgData } from "./OrgData.js";
import { AddOrgForm } from "./AddOrgForm";

const Organization = () => {
	// const DataLoading = OnLoadingOrgData( OrgData );

	const [appState, setAppState] = useState({
		id: null, name: "", address: "", INN: ''
	});
	useEffect(() => {
		// setAppState({ loading: true });
		const apiUrl = "http://127.0.0.1:8080/organization";
		Axios.get(apiUrl).then((resp) => {
			const allOrgs = resp.data;
			setAppState(allOrgs);
		});
	}, [setAppState]);
	console.log('-----')
	console.log(appState)
	console.log('-----')
  const addOrg = organ => {
    // создаем id значением на 1 больше (автоинкремент)
    organ.id = appState.length + 1
    // вызываем setUsers определенную выше в хуке useState
    // передаем туда все, что было в users + новый элемент user
    // setAppState({
    //    loading: false,
    //   org: organ,
    // });
	setAppState([ ...appState, organ ])
  }
	return (
		<div className="Crud">
			<div className="OrgTable">
				{/* добавляем таблицу: */}
				<OrgData org={ appState } />
			</div>
			<div className="OrgForm">
				<h2>Add organization</h2>
				{/* добавили форму */}
				<AddOrgForm addOrg={ addOrg }/>
			</div>
		</div>
	)
}
export { Organization };
{
	/* <NavLink to="/division">
				<h2>Organization</h2>
			</NavLink> */
}
