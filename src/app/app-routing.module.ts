import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppGuard } from './guard/app.auth';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: '', component:PrincipalComponent,canActivate:[AppGuard],data:{roles:[]}},
  { path: 'principal', component:PrincipalComponent},
  { path: 'menu', component:MenuComponent,canActivate:[AppGuard],data:{roles:['ADMIN']}},
  { path: 'notfound', component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
