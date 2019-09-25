import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/store.models';
import { Observable } from 'rxjs';
import { UiState } from '../../store/ui/ui.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  APP_TITLE: string;
  storeData$: Observable<UiState>;

  constructor(
    private title: Title,
    private store$: Store<AppState>,
  ) {
    this.APP_TITLE = 'GlobeChain APP';
    this.title.setTitle(this.APP_TITLE);

    // Get data from store
    this.storeData$ = this.store$.select(ui => ui.uiState);
  }

  ngOnInit() { }

}
