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
	console.log("блабла");
	console.log(id);
	console.log("блабла");

	const [appState, setAppState] = useState({
		id: null,
		id_organization: "",
		name: "",
		phone: "",
	});

	const dispatch = useDispatch();
	const [modalActive, setModalActive] = useState();
	appState = useSelector((state) => state.div);
	console.log(appState);

	useEffect(() => {
		dispatch(getDivisions(id));
	}, [dispatch]);

	const addDiv = (divis) => {
		// создаем id значением на 1 больше (автоинкремент)
		divis.id = appState.length + 1;
		setAppState([...appState, divis]);
	};
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
					<AddDivForm addDiv={addDiv} />
				</Modal>
			</div>
		</div>
	);
};

export { Division };
