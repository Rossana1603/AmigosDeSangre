using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AmigosDeSangre.Datos.Modelos;

namespace AmigosDeSangre.Datos.Repositorios
{
    public class RepositorioHorario : IRepositorioHorario
    {
        private readonly AmigosDeSangreContext _dbContext;
        public RepositorioHorario(AmigosDeSangreContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<CentroMedico> ObtenerCentros()
        {
            return _dbContext.CentrosMedicos.ToList();
        }
        public IEnumerable<Horario> ObtenerHorarios()
        {
            return _dbContext.Horarios.ToList();
        }
    }
}
