import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IActionType } from ".././common";
import { Actions } from "../Actions/Actions";
import { IStoreState } from "../Reducers/Reducers";
import "../components/styles/sass/login.sass";

class LogInForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login: "",
			password: "",
		};

		this.handleLoginInput = this.handleLoginInput.bind(this);
		this.handlePasswordInput = this.handlePasswordInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleLoginInput(event) {
		this.setState({ login: event.target.login });
	}

	handlePasswordInput(event) {
		this.setState({ password: event.target.password });
	}

	handleSubmit(event) {
		event.preventDefault();
		const logI = event.target.login.value;
		const pas = event.target.password.value;

		console.log("Логин: " + logI);
		console.log("Пароль: " + pas);
		this.props.actions.onLogin({
			loginData: { login: logI, password: pas },
		});
		// event.preventDefault();
	}

	handleLogin = () =>
		this.props.actions.onLogin({
			loginData: { login: this.state.login, password: this.state.password },
		});

	render() {
		const { loginStatus, waitingForLogin, countResult, counting } = this.props; 
		return (
					<section className="body-sign">
						<div className="center-sign">
							<div className="panel card-sign">
								<div className="card-sign-title cst-signup">
									<h2 className="title">Войти</h2>
								</div>
								<div className="card-body cb-signup">
									<form action="" onSubmit={this.handleSubmit}>
										<div className="form-group login">
											<label htmlFor="" type="text">
												Логин
											</label>
											<div className="input-group">
												<input
													name="login"
													type="text"
													className="form-control"
													value={this.state.login}
													onChange={this.handleLoginInput}
												/>
											</div>
										</div>
										<div className="form-group pwd">
											<div className="pwd-title">
												<label htmlFor="Password" className="pwd-tit">
													Пароль
												</label>
												<a href="#" className="pwd-lost">
													Забыли пароль?
												</a>
											</div>
											<div className="input-group">
												<input
													name="password"
													autoComplete="off"
													type="password"
													className="form-control"
													value={this.state.password}
													onChange={this.handlePasswordInput}
												/>
											</div>
										</div>
										<div className="bot-cont">
											<div className="checkbox-cont">
												<input id="AgreeTerms" name="agreeTerms" type="checkbox" />
												<label htmlFor="AgreeTerms">Запомнить меня</label>
											</div>
											<div className="submit-cont">
												<button className="btn-primary" type="submit" value="Войти">Войти</button>
											</div>
										</div>
										<p className="link-up">
											Don't have an account yet? <a href="#">Зарегистрироваться!</a>
										</p>
									</form>
								</div>
							</div>
						</div>
					</section>
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

const connectApp = connect(mapStateToProps, mapDispatchToProps)(LogInForm);

export { connectApp as LogInForm };
export { LogInForm };
