import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from '../types';

// esta funcion es la q se usa en la vista

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
  return (dispatch) => {
    dispatch(agregarProducto());

    try {
      dispatch(agregarProductoExito(producto)) // dispatch es lo q manda ejecutar las acciones
    } catch (error) {
      dispatch(agregarProductoError(true))

    }
  }
}

// Las acciones se pasan como objetos al reducer
const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true // payload es la parte que modifica los datos, el state
});

// si el producto se guarda en la base de datos
const agregarProductoExito = producto => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto
})

// si hubo un error
const agregarProductoError = estado => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado

});

// El payload es la parte q modifica el state
// Dispatch es lo q manda ejecutar las acciones
// Las acciones se pasan como objetos al reducer