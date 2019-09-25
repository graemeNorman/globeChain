import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './store.reducer';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      name: 'GlobeChain_Store',
      logOnly: environment.production,
    }),
  ],
  exports: [
    StoreModule,
  ],
})

export class AppStoreModule { }
