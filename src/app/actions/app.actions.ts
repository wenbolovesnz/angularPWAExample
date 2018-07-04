import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'

export const APP_NETWORK_EVENT = '[APP] NETWORK_EVENT'

export class NetworkEvent implements Action {
    readonly type = APP_NETWORK_EVENT

    constructor(public payload: boolean) {}
}

export type Actions = NetworkEvent