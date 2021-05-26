import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IActionType } from "../common";
import { Actions } from "../Actions/Actions";
import { IStoreState } from "../Reducers/Reducers";
import "../components/styles/sass/login.sass";

class LogInForm extends React.Component {

    constructor(props) {
        // super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        console.log('Логин: ' + this.state.value);
        event.preventDefault();
      }

    render() {
      return (
        <section className="body-sign">
            <div className="center-sign">
                <div className="panel card-sign">
                    <div className="card-sign-title cst-signup">
                        <h2 className="title">
                            Войти
                        </h2>
                    </div>
                    <div className="card-body cb-signup">
                        <form action="" onSubmit={this.handleSubmit}>
                            <div className="form-group login">
                                <label htmlFor="" type="text">Логин</label>
                                <div className="input-group">
                                    <input name="login" type="text" className="form-control" value={this.state.value} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="form-group pwd">
                                <div className="pwd-title">
                                    <label htmlFor="Password" className="pwd-tit">Пароль</label>
                                    <a href="#" className="pwd-lost">Забыли пароль?</a>
                                </div>
                                <div className="input-group">
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="bot-cont">
                                <div className="checkbox-cont">
                                    <input id="AgreeTerms" name="agreeTerms" type="checkbox" />
                                    <label htmlFor="AgreeTerms">Запомнить меня</label>
                                </div>
                                <div className="submit-cont">
                                    <input className="btn-primary" type="submit" value="Войти" />
                                </div>
                            </div>
                            <p className="link-up">Don't have an account yet? <a href="#">Зарегистрироваться!</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
      );
    };
  }

export { LogInForm };