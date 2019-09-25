import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/store.models';
import { AddCompany } from '../../store/ui/ui.actions';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})

export class AddCompanyComponent implements OnInit {

  constructor(
    private store$: Store<AppState>,
  ) {}

  ngOnInit() { }

  newCompany(form) {
    this.store$.dispatch(
      new AddCompany(
        { formData: form.value}
      )
    );

  }

}
