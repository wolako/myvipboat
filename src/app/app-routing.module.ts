import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './menus/a-propos/a-propos.component';
import { AcceuilComponent } from './menus/acceuil/acceuil.component';
import { NosServicesComponent } from './menus/nos-services/nos-services.component';

const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'nos-services', component: NosServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
