import { Component } from '@angular/core';
import { Storage,ref,uploadBytes, listAll, getDownloadURL} from '@angular/fire/storage'


@Component({
  selector: 'app-agregarw',
  templateUrl: './agregarw.component.html',
  styleUrls: ['./agregarw.component.css']
})
export class AgregarwComponent {


images: string [];

constructor (private storage: Storage){
  this.images=[];

}

ngOnInit(){
  this.getImages();
}

uploadImage ($event:any) {

  const file = $event.target.files[0];
  console.log(file)

const Imgref= ref(this.storage, `images/${file.name}`);


uploadBytes (Imgref,file)
.then(response => {
  console.log(response)
this.getImages();
})
.catch(error =>console.log(error));
}



getImages(){
  const Imgref = ref(this.storage, 'images');
  listAll(Imgref)
  .then(async response => {

    console.log(response);
    this.images = [];


for (let item of response.items){
  const url = await getDownloadURL(item);
  this.images.push(url);
  console.log(url);

}

  })
    .catch(error => console.log(error))
  
}
}
