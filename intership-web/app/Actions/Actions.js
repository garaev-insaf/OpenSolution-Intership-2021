import {Dispatch} from 'redux';
//import {IActionType} from '../common';
import {ActionTypes, AsyncActionTypes} from './Consts';
//import {ILoginData} from './Models';
import Axios from "axios";

/**
 * Экшены для приложения.
 */
export class Actions {
    constructor(/*private*/ dispatch/*: Dispatch<IActionType>*/) {
        this.dispatch = dispatch
    }

    onClick = async (increment/*: number*/) => {
        //Простейший асинхронный экшен
        // setTimeout(() => {
        //   this.dispatch({type: `${ActionTypes.LOGIN}${AsyncActionTypes.SUCCESS}`});
        // }, 2000);

        this.dispatch({type: `${ActionTypes.CLICK}${AsyncActionTypes.BEGIN}`});
        await new Promise((resolve) => setTimeout(resolve, 2000));
        this.dispatch({type: `${ActionTypes.CLICK}${AsyncActionTypes.SUCCESS}`, payload: increment});
    };

    onLogin = (loginData/*: ILoginData*/) => {
        let flag = 0;
        console.log(loginData);
        this.dispatch({type: `${ActionTypes.LOGIN}${AsyncActionTypes.BEGIN}`});

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(loginData),
        };
        fetch('http://127.0.0.1:8080/authorize', options)
            .then(response => {
                console.log();
                if (response.status === 200) {
                    return response.json()
                } else {
                    throw 'error';
                }
            })
            .catch(error => {
                this.dispatch({type: `${ActionTypes.LOGIN}${AsyncActionTypes.FAILURE}`, payload: error});
            })
            .then(data => {
                if (data.isLogin == true) {
                    this.dispatch({type: `${ActionTypes.LOGIN}${AsyncActionTypes.SUCCESS}`});
                    flag = 1;
                    console.log("flag = 1");
                } else {
                    flag = 0;
                    console.log("flag = 0");
                }
            })
        // return flag;
    };
    getOrganization = (page) => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }
        fetch('http://127.0.0.1:8080/organization', options)
            .then(response => {
                console.log(response.json());
                if (response.status === 200) {
                    console.log(response.json())
                    return response.json()
                } else {
                    throw 'error';
                }
            })
            .then(data => {
                if (data == true) {
                    flag = 1;
                    console.log("flag = 1");
                } else {
                    flag = 0;
                    console.log("flag = 0");
                }
            })
            .catch(error => {
            })
    }
    onLogout = () => {
        const options = {
            method: 'POST',
        };
        fetch('http://127.0.0.1:8080/logout', options)
        .then(response => {
            if (response.status === 200) {
                this.dispatch({type: ActionTypes.LOGOUT});
            } else {
                throw 'error';
            }
        })
        .catch(() => {
            this.dispatch({type: ActionTypes.LOGOUT});
        });
    }
}
