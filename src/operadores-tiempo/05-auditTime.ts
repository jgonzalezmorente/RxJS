import { from, fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>( document, 'click');


click$.pipe(

    map( ({ x, y }) => x),
    tap( val => console.log('Tap', val) ),
    auditTime(5000)

).subscribe( console.log );