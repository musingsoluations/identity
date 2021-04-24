import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './index';

@NgModule({
  imports: [CommonModule, StoreModule.forRoot(reducers)],
})
export class HttpStoreModule {}
