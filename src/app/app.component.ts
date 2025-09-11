import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jessy';
   duplicarNumero(valor: number): number {
    return valor * 2;
  }
  pelicula={
    titulo:"El señor de los anillos",
    fechalanzamiento: new Date (2001, 11, 19),
    director:"Peter Jackson"}

}
