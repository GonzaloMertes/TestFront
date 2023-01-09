import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercadeComponent } from './components/acerca-de/edit-acercade.component';
import { EditEduComponent } from './components/edu/edit-edu.component';
import { NewEduComponent } from './components/edu/new-edu.component';
import { EditExpComponent } from './components/exp/edit-exp.component';
import { NewExperienciaComponent } from './components/exp/new-exp.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { LoginComponent } from './components/login/login.component';
import { EditproComponent } from './components/proyecto/editpro.component';
import { NewproComponent } from './components/proyecto/newpro.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path: 'nuevaexp', component:NewExperienciaComponent},
  {path:'editexp/:id', component:EditExpComponent},
  {path: 'nuevaedu', component:NewEduComponent},
  {path:'editedu/:id',component:EditEduComponent},
  {path: 'editskill/:id',component:EditSkillComponent},
  {path: 'newskill',component:NewSkillComponent},
  {path: 'editacercade/:id',component:EditAcercadeComponent},
  {path: 'newpro', component:NewproComponent},
  {path: 'editpro/:id', component:EditproComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
