import { timer_values } from './values.js'; 
import { showTime, loadBar } from './display.js';

let interval = null;
let tempo_limite;
let tempo_base_loadbar;

function playOrPause() {
    if(interval){
        pauseTimer();
        timer_values.timer_status   = 2;
    }   else {
        playTimer();
        timer_values.timer_status   = 1;
    }
}

function playTimer() {
    let modo    = timer_values.modo_atual;
    let min_base    = timer_values[ modo ];
    let tempo_delay = timer_values[ '_tempo_delay' ];

    if( tempo_delay ) {
        tempo_limite    = Date.now() + tempo_delay;

    } else {
        tempo_limite    = Date.now() + ( 1e3 * ( 60 * min_base ) + 1 );
        timer_values[ '_tempo_delay' ]  = null;

    }

    tempo_base_loadbar   = tempo_base_loadbar ? tempo_base_loadbar : ( tempo_limite - Date.now() ) / 1000; 

    interval    = setInterval(()=> {
        let tempo_atual = Date.now();
        let total_sec   = ( tempo_limite - tempo_atual ) / 1e3;

        if( Math.floor(total_sec ) <= 0 ) {
            terminaRound();

        } else {
            let minuto  = Math.floor( total_sec / 60 );
            let segundo = Math.floor( total_sec ) % 60;
            let load_percent    = 100 - ( total_sec * 100 / tempo_base_loadbar );
    
            showTime( minuto, segundo );
            loadBar( load_percent );
        }
    },500);
}

function pauseTimer() {
    clearInterval( interval );
    interval = null;
    timer_values[ '_tempo_delay' ] = tempo_limite - Date.now();
}

function resetaTimer() {
    clearInterval( interval );
    interval    = null;    
    timer_values.timer_status   = 0;
    timer_values[ '_tempo_delay' ]  = null;
    tempo_base_loadbar  = null;
    loadBar(0);
}

function terminaRound() {
    atualizaROundAtual();
    resetaTimer();
}

function atualizaROundAtual() {
    let modo    = timer_values.modo_atual;
    let round_pausa_longa   = timer_values[ '_round_pausa_longa' ];

    if(modo == '_pomodoro') {
        let round_atual = timer_values.round_atual += 1;
        timer_values.modo_atual = round_atual % round_pausa_longa == 0 ? '_pausa_longa' : '_pausa';
    } else {
        timer_values.modo_atual = '_pomodoro';
    }

    console.log(timer_values.round_atual);
}

export { playOrPause, resetaTimer };