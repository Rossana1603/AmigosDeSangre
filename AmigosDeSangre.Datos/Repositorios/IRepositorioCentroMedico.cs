using AmigosDeSangre.Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmigosDeSangre.Datos.Repositorios
{
    public interface IRepositorioCentroMedico
    {
        IEnumerable<CentroMedico> ObtenerCentros();
    }
}
