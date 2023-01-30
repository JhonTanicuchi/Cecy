import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeatureRoutingModule } from './feature-routing.module';
import { MaterialModule } from '../layout/material.model';

import { ListSolicitudMatriculasComponent } from './solicitud-matricula/list/list.component';
import { HeaderComponent } from './solicitud-matricula/header/header.component';
import { TabsComponent } from './solicitud-matricula/header/tabs/tabs.component';
import { BreadcrumbsComponent } from './solicitud-matricula/header/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './solicitud-matricula/header/search/search.component';
import { NameInitialsPipe } from '../shared/pipes/name-initials.pipe';

@NgModule({
  declarations: [
    ListSolicitudMatriculasComponent,
    HeaderComponent,
    TabsComponent,
    BreadcrumbsComponent,
    SearchComponent,
    NameInitialsPipe,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class FeatureModule {}
