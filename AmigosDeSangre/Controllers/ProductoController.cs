using AmigosDeSangre.Datos.Modelos;
using AmigosDeSangre.Entidades;
using AmigosDeSangre.Servicios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AmigosDeSangre.Controllers
{
    public class ProductoController : ApiController
    {
        private readonly IProductoServicio _productoServicio;

        public ProductoController(IProductoServicio productoServicio)
        {
            _productoServicio = productoServicio;
        }

        // GET api/producto
        public HttpResponseMessage Get()
        {
            var productos = _productoServicio.ObtenerProductos();
            if (productos != null)
            {
                var productEntities = productos as List<ProductoEntidad> ?? productos.ToList();
                if (productEntities.Any())
                    return Request.CreateResponse(HttpStatusCode.OK, productEntities);
            }
            return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Products not found");
        }
    }
}
