import { timer_values } from "./values.js";
import { playOrPause, resetaTimer } from "./logica_timer.js";


let timer_container = document.getElementById( 'timer-container' );
let timer_modo_radio    = document.getElementsByName( 'timer-modo-radio' );
let reiniciar_timer_button  = document.getElementById( 'reiniciar-timer-button' );

let pomodoro_time_range = document.getElementById('pomodoro-time-range');
let pausa_time_range    = document.getElementById('pausa-time-range');
let pausa_longa_time_range  = document.getElementById('pausa-longa-time-range');

let round_pausa_longa_range = document.getElementById('round-pausa-longa-range');

let pomodoro_auto_checkbox  = document.getElementById('pomodoro-auto-checkbox');
let pausa_auto_checkbox = document.getElementById('pausa-auto-checkbox');
let pausa_longa_auto_checkbox   = document.getElementById('pausa-longa-auto-checkbox');


timer_container.addEventListener( 'click', ()=> playOrPause() );

timer_modo_radio.forEach(this_radio => {
    this_radio.addEventListener( 'input', ()=> timer_values.modoTimer   = this_radio.value );
});

reiniciar_timer_button.addEventListener( 'click', ()=> resetaTimer() );

pomodoro_time_range.addEventListener('input', ()=> timer_values.pomodoro    = pomodoro_time_range.value);
pausa_time_range.addEventListener('input', ()=> timer_values.pausa  = pausa_time_range.value);
pausa_longa_time_range.addEventListener('input', ()=> timer_values.pausaLonga   = pausa_longa_time_range.value);

round_pausa_longa_range.addEventListener('input', ()=> timer_values.roundPausaLonga = round_pausa_longa_range.value);

pomodoro_auto_checkbox.addEventListener('input',()=> timer_values.pomodoroAuto  = pomodoro_auto_checkbox.checked);
pausa_auto_checkbox.addEventListener('input',()=> timer_values.pausaAuto    = pausa_auto_checkbox.checked);
pausa_longa_auto_checkbox.addEventListener('input',()=> timer_values.pausaLongaAuto = pausa_longa_auto_checkbox.checked);

function checkModoRadio(value_select) {
    timer_modo_radio.forEach(this_radio => {
        if(this_radio.value == value_select) {
            this_radio.checked = true;
        }
    });
}

export {checkModoRadio};