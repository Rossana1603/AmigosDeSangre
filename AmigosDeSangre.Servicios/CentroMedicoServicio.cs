using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AmigosDeSangre.Entidades;
using AmigosDeSangre.Datos.Repositorios;

namespace AmigosDeSangre.Servicios
{
    public class CentroMedicoServicio : ICentroMedicoServicio
    {
        private readonly IRepositorioCentroMedico _repositorioCentroMedico;

        public CentroMedicoServicio(IRepositorioCentroMedico repositorioCentroMedico)
        {
            _repositorioCentroMedico = repositorioCentroMedico;
        }
        public IEnumerable<CentroMedicoEntidad> ObtenerCentros()
        {
            throw new NotImplementedException();
        }
    }
}
