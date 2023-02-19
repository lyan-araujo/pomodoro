import { timer_values } from "./values.js";

function timer( _min, _sec ) {
    let timer_display   = document.getElementById( 'timer-display' );

    let min = _min < 10 ? `0${ _min }` : _min;
    let sec = _sec < 10 ? `0${ _sec }` : _sec;

    timer_display.textContent   = `${ min }:${ sec }`;
}

function pomodoroCounter(round_value) {
    let pomodoro_counter_display    = document.getElementById('pomodoro-counter-display');
    pomodoro_counter_display.textContent    = round_value;
}

function loadbar(percent_value) {
    document.documentElement.style.setProperty( '--load-percent', `${percent_value}%` );
    document.documentElement.style.setProperty( '--transp-percent', `${percent_value + 2}%` );
}

function elementoState(timer_state) {
    switch(timer_state){
        case 'off':
            offState();
            break;

        case 'on':
            onState();
            break;

        case 'pause':
            pauseState();
            break;

        default:
            console.log(`elementoState(${timer_state}): ocorreu algum erro Ò-Ó`);
            break;
    }

    console.log(timer_state);
}

let abre_menu_button    = document.getElementById( 'abre-menu-label' );
let play_button_icon    = document.getElementById('play-button-icon');
let pause_button_icon   = document.getElementById('pause-button-icon');
let modo_container  = document.getElementById( 'modo-container' );
let reiniciar_timer_button  = document.getElementById( 'reiniciar-timer-button' );

function offState() {
    abre_menu_button.classList.remove('dspl-none');
    play_button_icon.classList.remove('dspl-none');
    pause_button_icon.classList.add('--disabled');
    modo_container.classList.remove('dspl-none');
    reiniciar_timer_button.classList.add('dspl-none');
}

function onState() {
    abre_menu_button.classList.add('dspl-none');
    play_button_icon.classList.add('dspl-none');
    pause_button_icon.classList.add('--disabled');
    modo_container.classList.add('dspl-none');
    reiniciar_timer_button.classList.add('dspl-none');
}

function pauseState() {
    abre_menu_button.classList.add('dspl-none');
    play_button_icon.classList.add('dspl-none');
    pause_button_icon.classList.remove('--disabled');
    modo_container.classList.add('dspl-none');
    reiniciar_timer_button.classList.remove('dspl-none');

}

function rangeValue(id_display, range_value, abrev) {
    let display = document.getElementById(id_display);
    let value   = range_value < 10 ? `0${range_value}` : range_value;

    if(abrev){
        value   = `${value}min`;
    }

    display.textContent = value;
    timer(timer_values.tempoBaseModo, 0);
}



export { timer, pomodoroCounter, loadbar, elementoState, rangeValue };