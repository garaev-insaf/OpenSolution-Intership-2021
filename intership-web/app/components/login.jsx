// я не знаю какой способ стилизации в проектах самый оптимальный
// поэтому решил прибегнуть создании объект-переменную стилей

// вопрос, если у меня в фолдере componnts будет отдельный файл стилизации компонентов
// и когда я компоненту буду использоваться в app.jsx не слетит ли path? или будет достаточно его и туда импортировать?

// другой вопрос: если у меня в фолдере уровня выше будет отдельный фолдер со стлизиция компонентов
// и когда я компоненту буду использовать в app.jsx не слетит ли path? или будет достаточно его и туда импортировать?
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IActionType } from "../common";
import { Actions } from "../Actions/Actions";
import { IStoreState } from "../Reducers/Reducers";
import "../components/styles/sass/login.sass";

class LogInForm extends React.Component {

    logClick = () => console.log('обработать нажатие на кнопку - вывести в консоль.');

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
                        <form action="">
                            <div className="form-group login">
                                <label htmlFor="">Логин</label>
                                <div className="input-group">
                                    <input name="login" type="text" className="form-control"/>
                                    {/* <span className="input-group-append">
                                    </span> */}
                                </div>
                            </div>
                            <div className="form-group pwd">
                                <div className="pwd-title">
                                    <label htmlFor="Password" className="pwd-tit">Пароль</label>
                                    <a href="#" className="pwd-lost">Забыли пароль?</a>
                                </div>
                                <div className="input-group">
                                    <input type="pwd" className="form-control" />
                                </div>
                            </div>
                            <div className="bot-cont">
                                <div className="checkbox-cont">
                                    <input id="AgreeTerms" name="agreeTerms" type="checkbox" />
                                    <label htmlFor="AgreeTerms"></label>
                                </div>
                                <div className="submit-cont">
                                    <button className="btn-primary" type="sumbit" onClick={this.logClick}>Войти</button>
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