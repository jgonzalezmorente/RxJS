import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';



const numeros$ = range(1, 5);

numeros$.pipe(

    tap( x => console.log('antes', x) ),
    map( val => val ),
    tap( {
        next: valor => console.log('después', valor),
        complete: () => console.log('Se terminó todo')
    } )
)
.subscribe( val => console.log('subs', val ));