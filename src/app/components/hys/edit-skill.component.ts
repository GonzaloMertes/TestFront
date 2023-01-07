import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { ImageSService } from 'src/app/service/image-s.service';
import { ImageService } from 'src/app/service/image.service';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;

  constructor(private activatedRouter:ActivatedRoute, 
    private Sskill:SkillService, 
    private router: Router,
    public imageService: ImageSService) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.Sskill.detail(id).subscribe(
        data =>{
          this.skill = data;
        }, err =>{
          alert("Error al modificar la skill");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate():void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.skill.img = this.imageService.url;
      this.Sskill.update(id, this.skill).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error al modificar persona");
           this.router.navigate(['']);
        }
      )
    }

    //debemos colocar una forma de elimnar la foto del storage cuando se elimina un hys
    
  
    


}

