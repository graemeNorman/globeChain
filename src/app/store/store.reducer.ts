import { AppState } from './store.models';
import { uiReducer } from './ui/ui.reducer';
import { environment } from 'src/environments/environment';
import { MetaReducer, ActionReducer, Action, ActionReducerMap } from '@ngrx/store';

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<AppState> = {
  uiState: uiReducer,
};

/**
 * meta-reducer: console.log all actions
 */
export const logger = (reducer: ActionReducer<AppState>): ActionReducer<AppState> => {
  return (state: AppState, action: Action): AppState => {

    const nextState = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state);
    console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
    console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);
    console.groupEnd();
    return nextState;

  };
};

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : /* istanbul ignore next */ [];
