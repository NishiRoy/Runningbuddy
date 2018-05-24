import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { GoRunningComponent } from './go-running/go-running.component';
import { AuthGuard } from './auth.guard';
import { RootComponent } from './root-component/root-component.component';

const routes: Routes = [
  {path: '', component: RootComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'home/:id',component:HomeComponent,canActivate:[AuthGuard],children:[
  {path:'edit/:id',component:EditProfileComponent},
  {path:'editschedule/:id',component:EditScheduleComponent},
  {path:'gorunning/:id',component:GoRunningComponent}]},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const rountingcomponent=[LoginComponent,RegisterComponent,HomeComponent,PageNotFoundComponent ]
