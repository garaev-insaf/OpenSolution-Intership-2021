import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
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

/**
 * Пропсы компонента из стора.
 * @prop {boolean} loginStatus Состояние зарегистрированности пользователя.
 * @prop {boolean} waitingForLogin Ожидание завершения процедуры авторизации (завершение логина).
 * @prop {boolean} countResult Результат вычисления.
 * @prop {boolean} counting Выполнение вычисления.
 */
// interface IStateProps{
//     loginStatus: boolean;
//     waitingForLogin: boolean;
//     countResult: number;
//     counting: boolean;
// }

/**
 * Пропсы для передачи экшенов.
 * @prop {Actions} actions Экшены для работы приложения.
 */
// export interface IDispatchProps{
//     actions: Actions;
// }

/**
 * Итоговые пропсы компонента
 */
// type TProps = IStateProps & IDispatchProps;

/**
 * Основной класс приложения.
 */
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
			(
			<Router>
				<Switch>
					<Route
						exact
						path="/"
						render={() => {
							return loginStatus ? (
								<Redirect to="/organization" />
							) : (
								<Route path="/" component={LogInForm} />
							);
						}}
					/>
					<Route
						exact
						path="/employee"
						render={() => {
							return loginStatus ? (
								<Route path="/employee" component={Employee} />
							) : (
								<Redirect to="/" />
							);
						}}
					/>
					<Route
						exact
						path="/organization"
						render={() => {
							return loginStatus ? (
								<Route path="/organization" component={Organization} />
							) : (
								<Redirect to="/" />
							);
						}}
					/>
					<Route
						exact
						path="/division"
						render={() => {
							return loginStatus ? (
								<Route path="/division" component={Division} />
							) : (
								<Redirect to="/" />
							);
						}}
					/>
					<Route exact path="/employee">
						<Employee />
					</Route>
					<Route exact path="/division">
						<Division />
					</Route>
					<Route exact path="/organization">
						<Organization />
					</Route>
				</Switch>
			</Router>
			)
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
