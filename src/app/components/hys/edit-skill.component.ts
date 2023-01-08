import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { ImageSService } from 'src/app/service/image-s.service';
import { ImageService } from 'src/app/service/image.service';
import { SkillService } from 'src/app/service/skill.service';
import { ref,Storage,uploadBytes, getDownloadURL, getStorage, deleteObject } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;
  img:string;

  constructor(private activatedRouter:ActivatedRoute, 
    private Sskill:SkillService, 
    private router: Router,
    public imageService: ImageSService,
    public storage:Storage) { }

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
    
    public uploadImage( $event:any){
      const id = this.activatedRouter.snapshot.params['id'];
      this.delete(id)
      const file = $event.target.files [0];
      
      //colocamos el lugar adonde se descargara la imagen en el storage 
      const ImagesRef = ref(this.storage, `imageSkill/${file.name}`);
        
      uploadBytes(ImagesRef, file)
      .then((snapshot) => {
        console.log('se subio el archivo');
      })
      .catch(error => console.log(error))
      .then( download =>{
    
        const storage = getStorage();
      getDownloadURL(ref(storage, `imageSkill/${file.name}` ))
      .then((url) => {
        
        // `url` is the download URL for 'imageSkill/'+name
    
        this.skill.img = url;
       
    
      })
      .catch((error) => { console.log(error);
      });
    
      }); 
      
    
    }
    
    delete(id: number){
  const desertRef = ref(this.storage, `${this.skill.img}`);
  deleteObject (desertRef).then(() => {
    console.log("Se pudo elimnar la imagen")
  }).catch((error) => {
    console.log("No se pudo elimnar la imagen")
  });
}


}

