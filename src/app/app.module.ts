import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FootbarComponent } from './footbar/footbar.component';
import { DetailsComponent } from './details/details.component';
import { LayoutComponent } from './layout/layout.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    DashboardComponent,
    FootbarComponent,
    DetailsComponent,
    LayoutComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
