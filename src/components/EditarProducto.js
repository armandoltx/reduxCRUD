import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//useDispatch ==> ejecuta las acciones
//useSelector ==> para acceder al state
import { editarProductoAction } from '../actions/productoActions';

const EditarProducto = () => {
  // producto a editar
  const producto = useSelector(state => state.productos.productoeditar)
  // console.log(producto)
  if(!producto) return null
  const { nombre, precio, id  } = producto

  const submitEditarProducto = e => {
    e.preventDefault();

    editarProductoAction(producto);
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>

            <form
              onSubmit={submitEditarProducto}
            >
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >Guardar Cambios</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;