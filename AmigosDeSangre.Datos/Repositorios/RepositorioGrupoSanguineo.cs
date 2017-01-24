using AmigosDeSangre.Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmigosDeSangre.Datos.Repositorios
{
    public class RepositorioGrupoSanguineo
    {
        private AmigosDeSangreContext context;

        public RepositorioGrupoSanguineo(AmigosDeSangreContext context)
        {
            this.context = context;
        }

        public IEnumerable<GrupoSanguineo> ObtenerGrupos()
        {
            return context.GrupoSanguineos.ToList();
        }
    }

}
