import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import { History } from 'history';
import ExampleReducer/*, { IExample } */from './ExampleReducer'
import { OrgReducer, DivReducer, EmpReducer } from './OrgReducer'


/**
 * @interface
 * @description интерфейс главного хранилища.
 */
/*export interface IStoreState {
    router: any
    Example: IExample
}*/

/**
 * Возвращает редьюсер.
 * @param {History} history
 */
const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    Example: ExampleReducer,
    org: OrgReducer,
    div: DivReducer,
    emp: EmpReducer,
})

export default createRootReducer
