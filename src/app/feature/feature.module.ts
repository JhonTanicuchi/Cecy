import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeatureRoutingModule } from './feature-routing.module';
import { MaterialModule } from '../layout/material.model';

import { TableOverviewExample } from './table/table-overview-example';
import { SolicitudMatriculaComponent } from './solicitud-matricula/solicitud-matricula.component';

@NgModule({
  declarations: [
    TableOverviewExample,
    SolicitudMatriculaComponent,
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
