using AmigosDeSangre.Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmigosDeSangre.Datos.Repositorios
{
    public interface IRepositorioSolicitud
    {
        IEnumerable<Solicitud> ObtenerSolicitudes();
        Solicitud ObtenerSolicitudPorCodigo(int codigoSolicitud);
        void InsertarSolicitud(Solicitud solicitud);
        void EliminarSolicitud(int codigoSolicitud);
        void ActualizarSolicitud(Donante solicitud);
        void Save();
    }
}
