import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_EXITO,
  PRODUCTO_ELIMINADO_ERROR,
  OBTENER_PRODUCTO_EDITAR,
  COMENZAR_EDICION_PRODUCTO,
  PRODUCTO_EDITADO_EXITO,
  PRODUCTO_EDITADO_ERROR
} from '../types';
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'

// esta funcion es la q se usa en la vista

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto());

    try {
      // insertar en la API (base de datos)
      await clienteAxios.post('/productos', producto)

      // si todo sale bien, actualizar el state
      dispatch(agregarProductoExito(producto)) // dispatch es lo q manda ejecutar las acciones

      //Alerta
      Swal.fire(
        'Correcto',
        'El producto se agregó correctamente',
        'success'
      )
    } catch (error) {
      console.log(error)
      //si hay un error cambiar el state
      dispatch(agregarProductoError(true))

      // alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error, intenta de nuevo'
      })

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

// Función que descarga los productos de la base de datos
export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(descargarProductos());

    try {
      const respuesta = await clienteAxios.get('/productos'); // traer los datos de la BD
      // console.log(respuesta)
      dispatch(descargaProductosExitosa(respuesta.data)) // agregar los datos al state
    } catch (error) {
      console.log(error);
      dispatch(descargaProductosError())
    }

  }
}

const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true
});

const descargaProductosExitosa = productos => ({
  type: DESCARGA_PRODUCTOS_EXITO,
  payload: productos
})
const descargaProductosError = () => ({
  type: DESCARGA_PRODUCTOS_ERROR,
  payload: true
});

// Selecciona y elimina el Producto
export function borrarProductoAction(id) {
  return async (dispatch) => {
    dispatch(obtenerProductoEliminar(id))
    // console.log(id)

    try {
      await clienteAxios.delete(`/productos/${id}`); // lo elimina de la BD
      dispatch(eliminarProductoExito()); // lo elimina del state

      // Si se elimina, mostrar alerta
      Swal.fire(
        'Eliminado',
        'El producto se eliminó correctamente',
        'success'
      )

    } catch (error) {
      console.log(error);
      dispatch(eliminarProductoError());
    }
  }
}

const obtenerProductoEliminar = id => ({
  type: OBTENER_PRODUCTO_ELIMINAR,
  payload: id
})

const eliminarProductoExito = () => ({ // la creamos en 583
  type: PRODUCTO_ELIMINADO_EXITO
})

const eliminarProductoError = () => ({ // la creamos en 583
  type: PRODUCTO_ELIMINADO_ERROR,
  payload: true
});


// Colocar producto en edición
export function obtenerProductoEditar(producto) {
  return (dispatch) => {
    dispatch(obtenerProductoEditarAction(producto))
  }
}

const obtenerProductoEditarAction = producto => ({
  type: OBTENER_PRODUCTO_EDITAR,
  payload: producto
})

// Edita un registro en la api y state
export function editarProductoAction(producto) {
  return async (dispatch) => {
    dispatch(editarProducto());

    try {
      await clienteAxios.put(`/productos/${producto.id}`, producto); // cambiar la BD
      dispatch(editarProductoExito(producto)); // cambiar el state
    } catch (error) {
      console.log(error);
      dispatch(editarProductoError());
    }
  }
}
const editarProducto = () => ({
  type: COMENZAR_EDICION_PRODUCTO
});

const editarProductoExito = producto => ({
  type: PRODUCTO_EDITADO_EXITO,
  payload: producto
});

const editarProductoError = () => ({
  type: PRODUCTO_EDITADO_ERROR,
  payload: true
})