import { timer_values } from './values.js'; 

let interval = null;

function playOrPause() {
    if(interval){
        pauseTimer();

    }   else {
        playTimer();

    }
}

function playTimer() {
    let delay = timer_values.delayPausa;
    let tempo_base_modo  = timer_values.tempoBaseModo;
    console.log(tempo_base_modo);
    let tempo_limite;
    let tempo_base_loadbar  = timer_values.tempoBaseLoadbar;

    if( delay ) {
        tempo_limite    = timer_values.timerTempoLimite   = Date.now() + delay;

    } else {
        tempo_limite    = timer_values.timerTempoLimite   = Date.now() + ( 1e3 * ( 60 * tempo_base_modo ) + 1 );
    }

    if(!tempo_base_loadbar) {
        tempo_base_loadbar  = timer_values.tempoBaseLoadbar   = (tempo_limite - Date.now()) / 1000;
    }
    
    timer_values.timerState = 'on';
    playInterval(tempo_limite, tempo_base_loadbar);
}

function playInterval(_tempo_limite, _tempo_base_loadbar) {

    interval    = setInterval(()=> {
        let tempo_atual = Date.now();
        let total_sec   = ( _tempo_limite - tempo_atual ) / 1e3;

        if( Math.floor(total_sec ) <= 0 ) {
            terminaRound();

        } else {
            let minuto  = Math.floor( total_sec / 60 );
            let segundo = Math.floor( total_sec ) % 60;
            let load_percent    = total_sec * 100 / _tempo_base_loadbar;

            timer_values.tempoAtual = [minuto, segundo];
            timer_values.tempoLoadbarPercent    = load_percent;
        }
    },500);
}

function pauseTimer(action = null) {
    clearInterval( interval );
    interval = null;

    timer_values.timerState = action == 'reset' ? 'off' : 'pause';
    timer_values.delayPausa = action == 'reset' ? null : timer_values.timerTempoLimite - Date.now();
}

function resetaTimer() {
    timer_values.timerState = 'off';
    timer_values.tempoBaseLoadbar  = null;
    timer_values.tempoLoadbarPercent    = 100;
    timer_values.tempoAtual = [timer_values.tempoBaseModo, 0];
    pauseTimer('reset');
}

function terminaRound() {
    atualizaRoundAtual();
    resetaTimer();
    executaAutomatico();
}

function atualizaRoundAtual() {
    let modo    = timer_values.modoTimer;
    let round_pausa_longa   = timer_values.roundPausaLonga;
    let round_atual = timer_values.roundAtual;

    if(modo == '_pomodoro') {
        round_atual = timer_values.roundAtual   = round_atual + 1;
        timer_values.modoTimer  = round_atual % round_pausa_longa == 0 ? '_pausa_longa' : '_pausa';
        
    } else {
        timer_values.modoTimer  = '_pomodoro';

    }
}

function executaAutomatico() {
    if(timer_values.modoAtualAuto){
        playTimer();
    }
}

export { playOrPause, resetaTimer };