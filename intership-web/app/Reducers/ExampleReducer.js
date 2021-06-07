// import {IActionType} from '../common';
import { ActionTypes, AsyncActionTypes } from "../Actions/Consts";

/**
 * Состояние для Redux хранилища (стора).
 * @prop {boolean} loginStatus Состояние зарегистрированности пользователя.
 * @prop {boolean} loading Ожидание завершения процедуры авторизации (завершение логина).
 * @prop {boolean} counter Результат вычисления.
 * @prop {boolean} counterIsLoading Выполнение вычисления.
 */
/*export interface IExample{
    loginStatus: boolean;
    loading: boolean;
    counter: number;
    counterIsLoading: boolean;
}*/

/**
 * Начальное состояние стора.
 */
const initialState = {
	get state() /*: IExample*/ {
		return {
			loginStatus: false,
			loading: false,
			counter: 0,
			counterIsLoading: false,
		};
	},
};

export default function reducer(
	state /*: IExample*/ = initialState.state,
	action /*: IActionType*/
) {
	switch (action.type) {
		case `${ActionTypes.CLICK}${AsyncActionTypes.BEGIN}`:
			return {
				...state,
				counterIsLoading: true,
			};

		case `${ActionTypes.CLICK}${AsyncActionTypes.SUCCESS}`:
			return {
				...state,
				counterIsLoading: false,
				counter: state.counter + (action.payload || 1),
			};

		case `${ActionTypes.LOGIN}${AsyncActionTypes.BEGIN}`:
			return {
				...state,
				loading: true,
			};

		case `${ActionTypes.LOGIN}${AsyncActionTypes.SUCCESS}`:
			return {
				...state,
				loginStatus: true,
				loading: false,
			};

		case `${ActionTypes.LOGIN}${AsyncActionTypes.FAILURE}`:
			return {
				...state,
				loading: false,
				loginStatus: false,
			};

		case ActionTypes.LOGOUT:
			return {
				...state,
				loginStatus: false,
			};
	}
	return state;
}
