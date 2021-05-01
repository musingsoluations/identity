import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RequestInProgressModule } from './common/store/requestInProgress/request-in-progress.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { LoaderUIComponent } from './common/component/loader-ui/loader-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderUIComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RequestInProgressModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers:
    [
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
  bootstrap: [AppComponent],
})
export class AppModule { }
