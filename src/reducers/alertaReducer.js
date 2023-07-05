import {MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../types'

// cada reducer tiene su propio state
const initialState = {
  alerta: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case MOSTRAR_ALERTA:
      return {
        ...state,
        alerta: action.payload
      }

    default:
      return state;
  }
}