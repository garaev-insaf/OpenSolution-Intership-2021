import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import { History } from 'history';
import ExampleReducer/*, { IExample } */from './ExampleReducer'


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
const createRootReducer = (history/*: History*/) => combineReducers/*<IStoreState>*/({
    router: connectRouter(history),
    Example: ExampleReducer,

})

export default createRootReducer
