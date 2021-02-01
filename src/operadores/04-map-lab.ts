import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta neque a lacus faucibus, vel semper risus commodo. Proin urna lacus, vehicula sit amet arcu at, volutpat vehicula lorem. Donec id tempor nibh. Sed tempus lacus odio, at tempus arcu viverra nec. Maecenas magna diam, pretium a augue sed, tristique dapibus eros. Nunc aliquam laoreet enim, sit amet iaculis diam ultrices nec. Vestibulum nibh magna, bibendum dictum congue et, condimentum eget magna.
<br/><br/>
Phasellus ac dignissim lorem. Proin ullamcorper, ipsum sed sodales luctus, tellus metus eleifend augue, ac pulvinar augue nisl sed augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse quam tellus, eleifend ac vestibulum vel, laoreet id quam. Cras cursus dignissim orci. Sed tincidunt, metus non scelerisque tempus, lacus nunc eleifend odio, vitae vulputate lorem ligula et purus. Suspendisse eget rhoncus neque. Mauris lacinia eros id iaculis fermentum. Nullam dictum sit amet felis in lobortis.
<br/><br/>
Donec id ultricies leo, ut fermentum nulla. Curabitur molestie commodo est non porttitor. Integer nec velit finibus, feugiat libero et, lacinia est. Mauris cursus, lectus a tempor scelerisque, erat turpis cursus nulla, egestas tincidunt tortor diam sit amet velit. Pellentesque sed lectus luctus, pretium dolor in, lacinia leo. Cras non ante sagittis, gravida nisi vitae, consequat neque. Vestibulum pulvinar nisl ac nulla rhoncus rhoncus. Curabitur vitae odio quis ipsum mollis facilisis vulputate et justo. In hac habitasse platea dictumst. In tristique vulputate ipsum sed luctus. Cras fermentum nunc quis mauris pellentesque, sed ornare nisi cursus. Integer vehicula lorem in neque gravida, sed mattis felis vulputate. Nullam vehicula consectetur volutpat. Proin purus nunc, gravida vitae felis et, vehicula vulputate sem. Proin euismod placerat nibh, vestibulum rutrum sapien placerat eu. Pellentesque facilisis at elit ut iaculis.
<br/><br/>
Nunc tempor nunc eget efficitur tincidunt. Praesent neque tortor, vulputate eu tempus ac, feugiat sit amet urna. Duis suscipit mattis purus, venenatis egestas elit iaculis nec. Sed vitae laoreet neque. Ut vestibulum eros eget sapien rutrum ultrices. Ut imperdiet ligula tellus, nec dapibus tellus lobortis molestie. Ut ultrices turpis quis mi dictum, et imperdiet quam volutpat. Mauris vitae malesuada lorem, sed viverra neque. Nam sodales, mauris eu porttitor fermentum, neque eros rhoncus ex, ac laoreet neque neque feugiat lorem. Sed eros arcu, placerat eu maximus sit amet, dapibus in quam. Pellentesque vehicula tempus eros at tincidunt. Fusce mollis vitae mauris in consequat. Proin lobortis arcu ante, vel luctus velit pellentesque sit amet. Vivamus nec metus eros. Maecenas venenatis neque ut lorem dignissim, ac molestie purus dignissim.
<br/><br/>
Pellentesque dignissim tempor dolor a maximus. Quisque imperdiet nulla eu sodales aliquam. Ut tincidunt lectus a venenatis accumsan. Phasellus viverra sodales elit, eget sollicitudin metus congue vulputate. Duis suscipit massa at rutrum interdum. Aliquam dui turpis, aliquam at condimentum vel, scelerisque iaculis nisl. Suspendisse eget facilisis arcu, congue gravida tellus. Aliquam erat volutpat. Morbi vulputate velit molestie ligula scelerisque, id condimentum justo condimentum.
`;

const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append( progressBar );


// función que haga el cálculo

const calcularPorcentajeScroll = ( event ) => {
    
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return ( 100 * scrollTop / ( scrollHeight - clientHeight ));

};



// Streams
const scroll$ = fromEvent( document, 'scroll' );

const progress$ = scroll$.pipe( 

    map( calcularPorcentajeScroll ),
    tap( console.log )




);


progress$.subscribe( porcentaje => {

    progressBar.style.width = `${ porcentaje }%`;

});