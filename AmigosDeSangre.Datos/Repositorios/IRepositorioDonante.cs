using AmigosDeSangre.Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmigosDeSangre.Datos.Repositorios
{
    public interface IRepositorioDonante
    {
        IEnumerable<Donante> ObtenerDonantes();
        Donante ObtenerDonantePorCodigo(int codigoDonante);
        void InsertarDonante(Donante donante);
        void EliminarDonante(int codigoDonante);
        void ActualizarDonante(Donante donante);
        void Save();
    }
}
