// cada reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoeliminar: null,
  productoeditar: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}