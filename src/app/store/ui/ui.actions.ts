import { Action } from '@ngrx/store';
import { Company } from './ui.models';

export enum UIActionTypes {
  GET_COMPANIES = '[UI] GET_COMPANIES',
  ADD_COMPANY = '[UI] ADD_COMPANY',
}

export class GetCompanies implements Action {
  readonly type = UIActionTypes.GET_COMPANIES;
  constructor(public payload: { companies: Company[] }) {}
}

export class AddCompany implements Action {
  readonly type = UIActionTypes.ADD_COMPANY;
  constructor(public payload: { formData: Company }) {}
}

export type UIActionsUnion = GetCompanies | AddCompany;
