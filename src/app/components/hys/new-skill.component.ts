import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { ImageSService } from 'src/app/service/image-s.service';
import { SkillService } from 'src/app/service/skill.service';
import { Storage, ref, uploadBytes, listAll, getDownloadURL, getStorage, uploadString } from '@angular/fire/storage';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  
  nombre:string;
  porcentaje:number;
  img:string;

  constructor(private storage: Storage,
    private skillS:SkillService,
    private router:Router,
    private activatedRouter: ActivatedRoute) {
    
  }

  ngOnInit(): void {
     
  }

onCreate(): void{
  const skill = new Skill(this.nombre, this.porcentaje, this.img);
  this.skillS.save(skill).subscribe(
    data => {
      alert("Skill creada correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo al añadir la skill");
      this.router.navigate(['']);
    }

  )
}
//a partir de aca EMPIEZA lo nuevo

public uploadImage( $event:any){
  const file = $event.target.files [0];
  const name = "skill" + this.nombre;  
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

    this.img = url;
   

  })
  .catch((error) => { console.log(error);
  });

  }); 

  

}

    //a partir de aca termina lo nuevo



}
