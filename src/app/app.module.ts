import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './dashboard/list/list.component';
import { PaginationComponent } from './dashboard/pagination/pagination.component';
import { SearchComponent } from './dashboard/search/search.component';
import { SortComponent } from './dashboard/sort/sort.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SpinnerButtonComponent } from './core/spinner-button/spinner-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListComponent,
    PaginationComponent,
    SearchComponent,
    SortComponent,
    HeaderComponent,
    SpinnerButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
