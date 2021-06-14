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
} from "react-router-dom";
import { IActionType } from "../common";
import { Actions } from "../Actions/Actions";
import { IStoreState } from "../Reducers/Reducers";
import "../../App/App.css";
import { EmpData } from "./EmpData";
import { AddEmpForm } from "./AddEmpForm";
import { NavBar } from "../NavBar";
import { Modal } from "../modal";
import { getEmps } from "../../Actions/MyActions";

const Employee = () => {
	let { empId } = useParams();

	const [appState, setAppState] = useState({
		id: null,
		id_division: "",
		FIO: "",
		address: "",
		position: "",
	});

	const dispatch = useDispatch();
	const [modalActive, setModalActive] = useState();
	appState = useSelector((state) => state.emp);
	console.log(appState);
	useEffect(() => {
		dispatch(getEmps(empId));
	}, [dispatch]);

	return (
		<div className="Crud">
			<div className="NavBar">
				{/* добавляем таблицу: */}
				<NavBar setActive={setModalActive} />
			</div>
			<div className="main-wrap">
				<div className="EmpTable">
					{/* добавляем таблицу: */}
					<EmpData emp={appState} setActive={setModalActive} />
				</div>
				<Modal active={modalActive} setActive={setModalActive}>
					<AddEmpForm setActive={setModalActive} />
				</Modal>
			</div>
		</div>
		
	);
};

export { Employee };
