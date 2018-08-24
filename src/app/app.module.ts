import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ToaAssetsComponent } from './toa-assets/toa-assets.component';
import { ToaCdAndInvestComponent } from './toa-cd-and-invest/toa-cd-and-invest.component';
import { ToaCdDetailComponent } from './toa-cd-detail/toa-cd-detail.component';
import { ToaFullPartialComponent } from './toa-full-partial/toa-full-partial.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToaAssetsComponent,
    ToaCdAndInvestComponent,
    ToaCdDetailComponent,
    ToaFullPartialComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
