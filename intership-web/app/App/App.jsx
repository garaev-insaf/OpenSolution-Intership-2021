import * as React from "react";
import { connect } from "react-redux";
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
import { LogInForm } from "../components/login";
import React, { useState } from "react";
import { Division } from "../components/Division/Division";
import { Organization } from "../components/Organization/Organization";
import { Employee } from "../components/Employee/Employee";
import { createBrowserHistory } from "history";
import { loginStatus, waitingForLogin, countResult, counting } from "../components/login";
import "./App.css";
import {history} from "../Store/Store.js"

class App extends React.Component /*<TProps, {}> */ {
	constructor(props) {
		super(props);
		this.state = { redirect: null };
	}

	/**
	 * Обработчик запуска вычисления.
	 */
	handleClick = () => this.props.actions.onClick(2);
	/**
	 * Обработчик выхода из системы.
	 */
	handleLogout = () => this.props.actions.onLogout();

	render() {
		const { loginStatus, waitingForLogin, countResult, counting } = this.props;
		return (
			<Router>
				<Switch>
					<Route exact path="/organization/:id/:empId">
						{!loginStatus ? <Redirect to="/" /> : <Employee />}
					</Route>
					<Route exact path="/organization/:id">
						{!loginStatus ? <Redirect to="/" /> : <Division />}
					</Route>
					<Route exact path="/organization">
						{!loginStatus ? <Redirect to="/" /> : <Organization />}
					</Route>
					<Route exact path="/">
						{loginStatus ? <Redirect to="/organization" component={Organization} /> : <LogInForm />}
					</Route>
					<Route exact path="/" component={LogInForm} />
					<Route exact path="/organization" component={Organization} />
					<Route exact path="/organization/:id" component={Division} />
					<Route exact path="/organization/:id/:empId" component={Employee} />
				</Switch>
			</Router>
		);
	}
}

function mapStateToProps(state /*: IStoreState*/) /*: IStateProps */ {
	return {
		loginStatus: state.Example.loginStatus,
		waitingForLogin: state.Example.loading,
		countResult: state.Example.counter,
		counting: state.Example.counterIsLoading,
	};
}

function mapDispatchToProps(dispatch /*: Dispatch<IActionType>*/) /*: IDispatchProps*/ {
	return {
		actions: new Actions(dispatch),
	};
}

const connectApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { connectApp as App };

export { App };
