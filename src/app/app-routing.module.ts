import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectStatsComponent} from './project-stats/project-stats.component';
import {UserCommitsComponent} from './user-commits/user-commits.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: '', component: ProjectListComponent},
  {path: 'project/:id', component: ProjectStatsComponent},
  {path: 'project/:id/user/:userId', component: UserCommitsComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
