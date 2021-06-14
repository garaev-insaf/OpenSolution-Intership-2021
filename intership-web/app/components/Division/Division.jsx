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
import { DivData } from "./DivData";
import { AddDivForm } from "./AddDivForm";
import { NavBar } from "../NavBar";
import { Modal } from "../modal";
import { getDivisions } from "../../Actions/MyActions";

const Division = () => {
	let { id } = useParams();

	const [appState, setAppState] = useState({
		id: null,
		id_organization: "",
		name: "",
		phone: "",
	});

	const dispatch = useDispatch();
	const [modalActive, setModalActive] = useState();
	appState = useSelector((state) => state.div);
	useEffect(() => {
		dispatch(getDivisions(id));
	}, [dispatch]);
	return (
		<div className="Crud">
			<div className="NavBar">
				{/* добавляем таблицу: */}
				<NavBar setActive={setModalActive} />
			</div>
			<div className="main-wrap">
				<div className="DivTable">
					{/* добавляем таблицу: */}
					<DivData div={appState} setActive={setModalActive} />
				</div>
				<Modal active={modalActive} setActive={setModalActive}>
					<AddDivForm setActive={setModalActive}/>
				</Modal>
			</div>
		</div>
	);
};

export { Division };
