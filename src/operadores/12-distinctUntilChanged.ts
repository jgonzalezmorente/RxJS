import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';



const numeros$ = of<number|string>(1,'1',1,3,3,2,2,4,4,5,3,1,'1');

numeros$.pipe(
    
    distinctUntilChanged() // ===

).
subscribe( console.log );

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },    
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    }
]


from( personajes ).pipe(

    distinctUntilChanged( (ant, act) => ant.nombre === act.nombre )

)
.subscribe(console.log);