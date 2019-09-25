
export const INITIAL_UI_STATE: UiState = {
  companies: null
};

export interface UiState {
  companies: Company[];
}

export interface Company {
  name: string;
  address: string;
  revenue: string;
  phone: string;
  employees?: Employees[];
}

export interface Employees {
  name: string;
  address: string;
  employer: string;
}
