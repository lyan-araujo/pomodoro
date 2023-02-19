import * as Display from "./display.js";
import * as Input from './input.js';

let timer_values = {
    _pomodoro   : {
        _tempo  : 25,
        _auto   : false
    },
    _pausa  : {
        _tempo  : 5,
        _auto   : false
    },
    _pausa_longa: {
        _tempo  : 15,
        _auto   : false
    },
    _round_pausa_longa  : 4,
    _round_atual: 0,
    _tempo_atual: [0, 0],
    _delay_pos_pausa: null,
    _timer_tempo_limite : null,
    _tempo_base_loadbar : null,
    _tempo_loadbar_percent  : 100,
    _timer_state: 'off',
    _modo_timer : '_pomodoro',
    _tempo_base_modo: function() {
        return this[this._modo_timer]['_tempo'];
    },
    _modo_atual_auto: function() {
        return this[this._modo_timer]['_auto'];
    },

    set pomodoro(new_value) {
        this._pomodoro['_tempo']    = new_value;

        Display.rangeValue('pomodoro-time-display', new_value, true);
    },
    get pomodoro() {
        return this._pomodoro['_tempo'];
    },
    set pomodoroAuto(new_value) {
        this._pomodoro['_auto'] = new_value;
    },
    
    set pausa(new_value) {
        this._pausa['_tempo']  = new_value;

        Display.rangeValue('pausa-time-display', new_value, true);
    },
    get pausa() {
        return this._pausa['_tempo'];
    },
    set pausaAuto(new_value){
        this._pausa['_auto']    = new_value;
    },
    
    set pausaLonga(new_value) {
        this._pausa_longa['_tempo']  = new_value;

        Display.rangeValue('pausa-longa-time-display', new_value, true);
    },
    get pausaLonga() {
        return this._pausa_longa['_tempo'];
    },
    set pausaLongaAuto(new_value) {
        this._pausa_longa['_auto']  = new_value;
    },
    
    set roundPausaLonga(new_value) {
        this._round_pausa_longa  = new_value;

        Display.rangeValue('round-pausa-longa-display', new_value, false);
    },
    get roundPausaLonga() {
        return this._round_pausa_longa;
    },
    
    set roundAtual(new_value) {
        this._round_atual  = new_value;

        Display.pomodoroCounter(new_value);
    },
    get roundAtual() {
        return this._round_atual;
    },
    
    set tempoAtual(new_value) {
        this._tempo_atual[0]    = new_value[0];
        this._tempo_atual[1]    = new_value[1];

        Display.timer(new_value[0], new_value[1]);
    },
    get tempoAtual() {
        return this._tempo_atual;
    },
    
    set delayPausa(new_value) {
        this._delay_pos_pausa  = new_value;
    },
    get delayPausa() {
        return this._delay_pos_pausa;
    },
    
    set timerTempoLimite(new_value) {
        this._timer_tempo_limite  = new_value;
    },
    get timerTempoLimite() {
        return this._timer_tempo_limite;
    },
    
    set tempoBaseLoadbar(new_value) {
        this._tempo_base_loadbar  = new_value;
    },
    get tempoBaseLoadbar() {
        return this._tempo_base_loadbar;
    },
    
    set tempoLoadbarPercent(new_value) {
        this._tempo_loadbar_percent  = new_value;

        Display.loadbar(new_value);
    },
    get tempoLoadbarPercent() {
        return this._tempo_loadbar_percent;
    },
    
    set timerState(new_value) {
        this._timer_state  = new_value;

        Display.elementoState(new_value);
    },
    get timerState() {
        return this._timer_state;
    },
    
    set modoTimer(new_value) {
        this._modo_timer  = new_value;

        Display.timer(this.tempoBaseModo, 0);
        Input.checkModoRadio(new_value);
    },
    get modoTimer() {
        return this._modo_timer;
    },

    get tempoBaseModo() {
        return this._tempo_base_modo();
    },

    get modoAtualAuto() {
        return this._modo_atual_auto();
    }
}

export { timer_values };