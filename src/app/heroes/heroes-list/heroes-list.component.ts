import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html'
})

export class HeroesListComponent {

  imageWidth:number = 40;
  imageMargin:number=2;
  showImage:boolean=true;

  muestraImagen():void{
    this.showImage=!this.showImage;}

heroes: any[] = [
  {
    imagen: "https://dragonball-api.com/characters/goku_normal.webp",
    nombre: "Goku",
    descripcion: "Kame Hame Ha",
    raza: "Saiyan",
    ki: 9000
  },
  {
    imagen: "https://dragonball-api.com/characters/vegeta_normal.webp",
    nombre: "Vegeta",
   descripcion: "Final Flash",
    raza: "Saiyan",
    ki: 8000
  },

{
  imagen: "https://dragonball-api.com/characters/piccolo_normal.webp",
  nombre: "Piccolo",
  descripcion: "Makankosappo",
  raza: "Namekiano",
  ki: 7000
},
{
  imagen: "https://dragonball-api.com/characters/Freezer.webp",
  nombre: "Freezer",
  descripcion: "Death Ball",
  raza: "Alien",
  ki: 9500
}
]

}
