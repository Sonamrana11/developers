import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';
import { LayoutComponent } from './layout/layout.component';
import { TopbarComponent } from './topbar/topbar.component';

const routes: Routes = [
  {
    path : '', redirectTo: 'layout/dashboard', pathMatch: 'full'
  },
  {
    path: 'layout', component: LayoutComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'showdetails', component: DetailsComponent}
    ]
  },
  { path: '**', component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
