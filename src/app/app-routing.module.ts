import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppV2Component } from './app-v2/app-v2.component';
import { AppV1Component } from './app-v1/app-v1.component';

const routes: Routes = [
  {
    path: '',
    component: AppV2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
