import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';

import { DashboardRoutes } from './dashboard-routing.module';
import { MaterialRoutingModule } from '../shared/material-routing.module'

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    MaterialRoutingModule,
    FlexLayoutModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }

