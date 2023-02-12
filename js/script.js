import { timer_values } from "./values.js";
import { playOrPause, resetaTimer } from "./logica_timer.js";

let timer_modo_radio    = document.getElementsByName( 'timer-modo-radio' );

let timer_container = document.getElementById( 'timer-container' );
let reiniciar_timer_button  = document.getElementById( 'reiniciar-timer-button' );

timer_modo_radio.forEach(this_radio => {
    this_radio.addEventListener( 'input', ()=> timer_values.modo_atual  = this_radio.value );
});

timer_container.addEventListener( 'click', ()=> playOrPause() );
reiniciar_timer_button.addEventListener( 'click', ()=> resetaTimer() );