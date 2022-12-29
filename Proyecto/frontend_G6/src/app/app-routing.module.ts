import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroLogComponent } from './registro-log/registro-log.component';

const routes: Routes = [
  {
    path: 'registro',
    component: RegistroLogComponent

  },
  {
    path: '',
    component: RegistroLogComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
