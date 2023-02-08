import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeatureRoutingModule } from './feature-routing.module';
import { MaterialModule } from '../layout/material.model';

import { ListSolicitudMatriculasComponent } from './solicitud-matricula/list/list.component';
import { HeaderComponent } from './solicitud-matricula/header/header.component';
import { TabsComponent } from './solicitud-matricula/header/tabs/tabs.component';
import { BreadcrumbsComponent } from './solicitud-matricula/header/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from '../shared/search/search.component';
import { NameInitialsPipe } from '../shared/pipes/name-initials.pipe';
import { CareersComboboxComponent } from '../shared/comboboxes/careers/careers.combobox.component';
import { CoursesComboboxComponent } from '../shared/comboboxes/courses/courses.combobox.component';
import { ParallelsComboboxComponent } from '../shared/comboboxes/parallels/parallels.combobox.component';
import { PeriodsComboboxComponent } from '../shared/comboboxes/periods/periods.combobox.component';
import { WorkingsDaysComboboxComponent } from '../shared/comboboxes/workings-days/workings-days.combobox.component';

@NgModule({
  declarations: [
    ListSolicitudMatriculasComponent,
    HeaderComponent,
    TabsComponent,
    BreadcrumbsComponent,
    SearchComponent,
    NameInitialsPipe,
    CareersComboboxComponent,
    CoursesComboboxComponent,
    ParallelsComboboxComponent,
    PeriodsComboboxComponent,
    WorkingsDaysComboboxComponent,
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
