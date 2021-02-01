import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>( subs => {

    const intervalID = setInterval(() => subs.next( Math.random() ), 1000);

    return () => {
        clearInterval( intervalID )
        console.log('Intervalo destruido');
    };
    
});

/**
 * 1- Casteo múltiple
 * 2- También es un observer
 * 3- Next, error y complete
 */

const subjects$ = new Subject();
const subscription = intervalo$.subscribe(subjects$);

// const subs1 = intervalo$.subscribe(rnd => console.log('subs1', rnd ));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2', rnd ));

const subs1 = subjects$.subscribe( observer );
const subs2 = subjects$.subscribe( observer );

setTimeout(() => {

    subjects$.next(10);
    subjects$.complete();
    subscription.unsubscribe();

}, 3500);

