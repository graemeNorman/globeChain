import { INITIAL_UI_STATE, UiState } from './ui/ui.models';

export const INITIAL_APP_STATE: AppState = {
  uiState: INITIAL_UI_STATE,
};

export interface AppState {
  uiState: UiState;
}
