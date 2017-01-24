using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AmigosDeSangre.Datos.Modelos;
using AutoMapper;

namespace AmigosDeSangre.Datos.Repositorios
{
    public class RepositorioProducto : IRepositorioProducto
    {
        private AmigosDeSangreContext context;

        public RepositorioProducto(AmigosDeSangreContext context)
        {
            this.context = context;
        }

        public IEnumerable<Producto> ObtenerProductos()
        {
            return context.Productos.ToList();
            
        }
    }
}
