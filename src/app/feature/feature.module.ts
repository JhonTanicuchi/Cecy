import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeatureRoutingModule } from './feature-routing.module';
import { MaterialModule } from '../layout/material.model';

import { TableOverviewExample } from './table/table-overview-example';
import { SolicitudMatriculaComponent } from './solicitud-matricula/solicitud-matricula.component';
import { ListSolicitudMatriculasComponent } from './solicitud-matricula/list/list.component';
import { HeaderComponent } from './solicitud-matricula/header/header.component';
import { TabsComponent } from './solicitud-matricula/header/tabs/tabs.component';
import { BreadcrumbsComponent } from './solicitud-matricula/header/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    TableOverviewExample,
    SolicitudMatriculaComponent,
    ListSolicitudMatriculasComponent,
    HeaderComponent,
    TabsComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
})
export class FeatureModule {}
