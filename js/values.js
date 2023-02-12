import { displayElementos } from "./display.js";

let timer_values = {
    '_pomodoro' : 1,
    '_pausa'    : 2,
    '_pausa_longa'  : 15,
    '_round_pausa_longa'    : 4,
    '_tempo_delay'  : null,
    '_timer_status'   : 0,
    '_modo_atual'    : '_pomodoro',
    '_round_atual'  : 0,
    
    set timer_status(new_value) {
        this._timer_status  = new_value;
        displayElementos();
    },
    
    set modo_atual(new_value) {
        this._modo_atual = new_value;
        displayElementos();
    },
    get modo_atual() {
        return this._modo_atual;
    },

    set round_atual(new_value) {
        this._round_atual   = new_value;
    },
    get round_atual() {
        return this._round_atual;
    }
}

export { timer_values };