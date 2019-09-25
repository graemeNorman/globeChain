import * as UIActions from './ui.actions';
import { INITIAL_UI_STATE, UiState } from './ui.models';
import { tassign } from 'tassign';

export function uiReducer(
  state = INITIAL_UI_STATE,
  action: UIActions.UIActionsUnion): UiState {

  switch (action.type) {

    case UIActions.UIActionTypes.GET_COMPANIES:
      return tassign(state, {
        companies: action.payload.companies
      });

    case UIActions.UIActionTypes.ADD_COMPANY:
      return tassign(state, <UiState> {
        companies: [
          action.payload.formData
        ]
      });

    default:
      return state;
  }
}
