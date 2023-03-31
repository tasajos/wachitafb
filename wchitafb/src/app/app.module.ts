import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarwComponent } from './Components/agregarw/agregarw.component';
import { ListadowComponent } from './Components/listadow/listadow.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarwComponent,
    ListadowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
