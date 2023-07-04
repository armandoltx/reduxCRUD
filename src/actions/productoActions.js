import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from '../types';

// esta funcion es la q se usa en la vista

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
  return () => {
    console.log(producto)
  }
}