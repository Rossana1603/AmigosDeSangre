using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AmigosDeSangre.Entidades;
using AmigosDeSangre.Datos;
using AmigosDeSangre.Datos.Repositorios;
using AutoMapper;
using AmigosDeSangre.Datos.Modelos;

namespace AmigosDeSangre.Servicios
{
    public class ProductoServicio : IProductoServicio
    {
        private readonly RepositorioProducto _repositorioProducto;

        public ProductoServicio()
        {
            _repositorioProducto = new RepositorioProducto(new AmigosDeSangreContext());
        }
        public IEnumerable<ProductoEntidad> ObtenerProductos()
        {
            var productos = _repositorioProducto.ObtenerProductos();
            if (productos.Any())
            {
                var config =
                    new MapperConfiguration(p => p.CreateMap<Producto, ProductoEntidad>());
                var productosModel = Mapper.Map<IEnumerable<Producto>, IEnumerable<ProductoEntidad>>(productos);
                return productosModel;
            }
            return null;
        }
    }
}
