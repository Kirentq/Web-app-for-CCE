import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { UpdateCurrencyComponent } from './update-currency/update-currency.component';
import { FileFormationComponent } from './file-formation/file-formation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UpdateCurrencyComponent,
    FileFormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
