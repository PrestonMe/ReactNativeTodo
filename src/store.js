import { createStore } from 'redux';
import { reducer } from './redcuers';
export const store = createStore(reducer);
