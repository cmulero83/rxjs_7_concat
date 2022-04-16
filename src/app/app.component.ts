// https://www.youtube.com/watch?v=0u_RGXRxXHY&list=PLHgpVrCyLWAoSkzNPYt9nhmtSlpXjtnju&index=7
// Operador contact, que nos va a permitir contactenar varios observables...
//

import { Component, OnInit } from '@angular/core';
import { concat, interval, range } from 'rxjs'
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_7_concat';

  public ngOnInit(): void{

    // Creamos un observable de intervalo, que se va a multiplicar por 4 veces
    // Es decir, va disparar interval x 4 veces, es decir 4 segundos.

    const timer = interval(1000).pipe(take(4))

    const rango = range(1, 10)  // Esto es un observable que cuenta de 1 a 10...

    // Vamos a contactenar las observables
    // Lo que va hacer es una vez que timer, dispare su succes, es decir que se ejecuto correctamente
    // empezara rango

    const result = concat(timer, rango)

    result.subscribe(x=> console.log(x))

    // Vamos en la salida, que primero tenemos cada segundo 0, 1, 2, 3, que es el intervalo 4 veces
    // Luego nos imprimer el rango del 1 al 10

  }
}
