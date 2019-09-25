import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../../store/ui/ui.models';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/store.models';
import { GetCompanies } from '../../store/ui/ui.actions';

const data = require('../../data/data.json');

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})

export class CompaniesListComponent implements OnInit {

  APP_TITLE: string;
  getCompaniesList$: Observable<Company[]>;

  constructor(
    private title: Title,
    private store$: Store<AppState>,
  ) {
    this.APP_TITLE = 'GlobeChain APP';
    this.title.setTitle(this.APP_TITLE);

    this.store$.dispatch(
      new GetCompanies(
        { companies: data }
      )
    );

    this.getCompaniesList$ = this.store$.select(companies => companies.uiState.companies);
  }

  ngOnInit() {}

}
