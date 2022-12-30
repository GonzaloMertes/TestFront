import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEduComponent } from './components/edu/edit-edu.component';
import { NewEduComponent } from './components/edu/new-edu.component';
import { EditExpComponent } from './components/exp/edit-exp.component';
import { NewExperienciaComponent } from './components/exp/new-exp.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path: 'nuevaexp', component:NewExperienciaComponent},
  {path:'editexp/:id', component:EditExpComponent},
  {path: 'nuevaedu', component:NewEduComponent},
  {path:'editedu/:id',component:EditEduComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
