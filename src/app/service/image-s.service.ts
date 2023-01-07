import { Injectable } from '@angular/core';
import { getDownloadURL, getStorage,list,ref, uploadBytes, Storage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageSService {

  url:string = "";

  constructor( private storage: Storage) { }

  public uploadImage($event:any , name: string){
    const file = $event.target.files [0];
    const imgRef = ref( this.storage, `imageS/`+ name)
    uploadBytes(imgRef, file)
    .then( response => {this.getImages()})
    .catch(error => console.log(error));
  }

  getImages(){
    const imagesRef = ref ( this.storage , 'imageS')
    list ( imagesRef)
    .then(async response => {
      for ( let item of response.items){
        this.url = await getDownloadURL(item);
        console.log ("La Url es:" + this.url);
      }
    })
    .catch( error => console.log(error))
  }
}