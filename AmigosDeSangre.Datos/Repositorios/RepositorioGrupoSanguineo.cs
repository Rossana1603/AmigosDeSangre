using AmigosDeSangre.Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmigosDeSangre.Datos.Repositorios
{
    public class RepositorioGrupoSanguineo : IRepositorioGrupoSanguineo
    {
        private readonly AmigosDeSangreContext _dbContext;

        public RepositorioGrupoSanguineo(AmigosDeSangreContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<GrupoSanguineo> ObtenerGrupos()
        {
            return _dbContext.GrupoSanguineos.ToList();
        }
    }

}
