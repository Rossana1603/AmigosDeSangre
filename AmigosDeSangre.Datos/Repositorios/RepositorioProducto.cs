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
        private readonly AmigosDeSangreContext _dbContext;

        public RepositorioProducto(AmigosDeSangreContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Producto> ObtenerProductos()
        {
            return _dbContext.Productos.ToList();
            
        }
    }
}
