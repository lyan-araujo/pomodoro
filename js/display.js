import { timer_values } from "./values.js";

function showTime( _min, _sec ) {
    let timer_display   = document.getElementById( 'timer-display' );
    let min = _min < 10 ? `0${ _min }` : _min;
    let sec = _sec < 10 ? `0${ _sec }` : _sec;

    timer_display.textContent   = `${ min }:${ sec }`;
}

function loadBar(percent_value) {
    let timer_loadbar   = document.getElementById( 'timer-loadbar' );
    timer_loadbar.style.setProperty( 'width', `${percent_value}%` );
}

function displayElementos() {
    let { _timer_status } = timer_values;

    let nav_modo    = document.getElementById( 'nav-modo' );
    let abre_menu_button    = document.getElementById( 'abre-menu-button' );
    let reiniciar_timer_button  = document.getElementById( 'reiniciar-timer-button' );
    let modo_sel    = timer_values.modo_atual;

    if( _timer_status === 0 ) {
        nav_modo.classList.remove( '--disabled' );
        abre_menu_button.classList.remove( '--disabled' );
        reiniciar_timer_button.classList.add( '--disabled' );
        showTime( timer_values[modo_sel], 0 );

    } else if( _timer_status === 1 ) {
        nav_modo.classList.add( '--disabled' );
        abre_menu_button.classList.add( '--disabled' );
        reiniciar_timer_button.classList.add( '--disabled' );
        
    } else {
        nav_modo.classList.add( '--disabled' );
        abre_menu_button.classList.add( '--disabled' );
        reiniciar_timer_button.classList.remove( '--disabled' );

    }
}

export { showTime, loadBar, displayElementos };