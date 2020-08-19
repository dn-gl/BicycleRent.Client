import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewRentComponent } from './components/new-rent/new-rent.component';
import { BicycleService } from './services/bicycle.service';
import { BicycleItemComponent } from './components/bicycle-item/bicycle-item.component';
import { HttpClientModule }   from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewRentComponent,
    BicycleItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BicycleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
