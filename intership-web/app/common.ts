import {Action} from 'redux';

/**
 * Вид используемых экшенов.
 * @prop {string} type Тип экшена.
 * @prop {any} [payload] Дополнительная информация для экшена.
 */
export interface IActionType extends Action {
    type: string;
    payload?: any;
}