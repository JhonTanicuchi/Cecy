import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { ListSolicitudMatriculasComponent } from '../feature/solicitud-matricula/list/list.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },

      {
        path: 'solicitudes-matriculas',
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: ListSolicitudMatriculasComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
