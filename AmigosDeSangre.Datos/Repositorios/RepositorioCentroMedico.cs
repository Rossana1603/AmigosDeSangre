using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AmigosDeSangre.Datos.Modelos;

namespace AmigosDeSangre.Datos.Repositorios
{
    public class RepositorioCentroMedico : IRepositorioCentroMedico
    {
        private readonly AmigosDeSangreContext _dbContext;
        public RepositorioCentroMedico(AmigosDeSangreContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<CentroMedico> ObtenerCentros()
        {
            throw new NotImplementedException();
        }
    }
}
